const loadTargetOffers = async () => {
  // Look for offers
  const offers = await window.adobe.target.getOffers({
    request: { execute: { pageLoad: {} } },
  });

  // Loop through them and inject
  offers.execute.pageLoad.options.forEach((opt) => {
    const { cssSelector, content } = opt.content[0];

    const el = document.querySelector(cssSelector);

    el.outerHTML = content;
  });
};

export default loadTargetOffers;
