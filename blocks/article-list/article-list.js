import { getConfig, loadBlock } from '../../scripts/ak.js';
import { createPicture } from '../../scripts/utils/picture.js';

const { codeBase, log } = getConfig();

const INDEX_NAME = 'query-index.json?limit=5000';
const ARTICLES_PATH = `${codeBase}/blog/${INDEX_NAME}`;

const FILTER_TYPES = {
  featured: 'yes',
  author: window.location.pathname.split('/').pop(),
};

function getExcelDate(excelDate) {
  // Excel's date system starts on January 1, 1900
  // JavaScript's Date counts from January 1, 1970
  // Excel has a leap year bug where it incorrectly includes February 29, 1900
  // So we need to adjust for dates after February 28, 1900

  // Convert Excel date to JavaScript date
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const excelEpoch = new Date(1899, 11, 30);

  // Create a new date by adding the Excel serial number of days
  const jsDate = new Date(excelEpoch.getTime() + excelDate * millisecondsPerDay);

  // Format the date as "Apr 4, 2025"
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return jsDate.toLocaleDateString('en-US', options);
}

async function createCard(article, idx) {
  const card = document.createElement('div');
  card.className = 'card';

  const row = document.createElement('div');
  const col = document.createElement('div');

  const eager = idx === 0 && !document.querySelector('img');

  const picPara = document.createElement('p');
  const pic = createPicture({ src: article.image, eager });
  picPara.append(pic);

  const date = document.createElement('p');
  date.textContent = article.publicationDate
    ? getExcelDate(article.publicationDate)
    : '\u00A0';

  const title = document.createElement('p');
  const strong = document.createElement('strong');
  strong.textContent = article.title;
  title.append(strong);

  const desc = document.createElement('p');
  desc.textContent = article.description;

  col.append(picPara, date, title, desc);
  row.append(col);
  card.append(row);

  await loadBlock(card);

  const a = document.createElement('a');
  a.href = article.path;
  a.append(card);

  return a;
}

function prefixToCamelCase(name) {
  // Remove prefix and optional hyphen
  const [, ...rest] = name.split('-');
  const [val, ...vals] = rest;
  const camelVals = vals.map((str) => str.charAt(0).toUpperCase() + str.slice(1));

  return `${val}${camelVals.join('')}`;
}

function getFilters(variants) {
  return variants.reduce((acc, cls) => {
    if (cls.startsWith('filter')) {
      const type = prefixToCamelCase(cls);
      acc.push({ type, value: FILTER_TYPES[type] });
    }
    return acc;
  }, []);
}

function getSort(variants) {
  const customSort = variants.find((cls) => cls.startsWith('sort'));
  if (customSort) return prefixToCamelCase(customSort);
  return 'publicationDate';
}

function getFilteredList(list, filters) {
  if (!filters.length) return list;

  return list.filter(
    (article) => filters.some((filter) => article[filter.type] === filter.value),
  );
}

function getSortedList(list, sortType) {
  return list.sort((a, b) => {
    // First compare by date (descending)
    if (a[sortType] !== b[sortType]) return b[sortType] - a[sortType];

    // If dates are equal, compare by lastModified (descending)
    return b.lastModified - a.lastModified;
  });
}

async function getElementList(list) {
  const articlesLoading = list.map((article, idx) => createCard(article, idx));
  const articles = await Promise.all(articlesLoading);
  return articles;
}

async function getBaseList() {
  const resp = await fetch(ARTICLES_PATH);
  if (!resp.ok) {
    log(`Could not get ${ARTICLES_PATH}. Error: ${resp.status}`);
    return [];
  }
  const { data } = await resp.json();
  return data || [];
}

export default async function init(el) {
  const baseList = await getBaseList();
  if (!baseList) {
    log('No articles found.');
    return;
  }

  const variants = [...el.classList];
  const filters = getFilters(variants);
  const sort = getSort(variants);

  const filteredList = getFilteredList(baseList, filters);
  if (!filteredList.length) {
    log('No articles available for supplied filter.');
    return;
  }

  const sortedList = getSortedList(filteredList, sort);
  const elementList = await getElementList(sortedList);
  if (!elementList.length) {
    log('Could not create elements');
    return;
  }

  el.replaceChildren();
  el.append(...elementList);
}
