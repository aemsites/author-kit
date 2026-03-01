function convertTargetSelector(selector) {
  // Converts :eq(0) to :nth-of-type(1), :eq(1) to :nth-of-type(2), etc.
  return selector.replace(/:eq\((\d+)\)/g, (match, p1) => {
    const index = parseInt(p1, 10) + 1;
    return `:nth-of-type(${index})`;
  });
}

const targetFinished = async () => {
  // Look for offers
  const offers = await window.adobe.target.getOffers({
    request: { execute: { pageLoad: {} } },
  });

  offers.execute.pageLoad.options.forEach((opt) => {
    const { cssSelector, content } = opt.content[0];

    const selector = convertTargetSelector(cssSelector);
    const el = document.querySelector(selector);

    el.outerHTML = content;
  });
};

export default targetFinished;
