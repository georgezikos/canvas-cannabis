const $storeTitleEl = $('h2.store-locations__heading');
const $aboutStoreTitleEl = $('h3.about__stores-heading');

const storeTitles = () => {
  const titleFormatter = (el) => {
    for (let i = 0; i < el.length; i++) {
      const storeTitleSplit = el[i].innerText.split(' ');
      const lastWord = storeTitleSplit.pop();
      const firstHalf = storeTitleSplit.join(' ');
      const newTitle =
        el === $storeTitleEl
          ? `<h2 class="store-locations__heading">${firstHalf} <span class="line-break">${lastWord}</span></h2>`
          : `<h3 class="about__stores-heading">${firstHalf} <span class="line-break">${lastWord}</span></h3>`;
      el[i].outerHTML = newTitle;
    }
  };
  titleFormatter($storeTitleEl);
  titleFormatter($aboutStoreTitleEl);
};

export default storeTitles;
