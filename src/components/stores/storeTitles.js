const $storeTitleEl = $('h2.store-locations__heading');

const storeTitles = () => {
  for (let i = 0; i < $storeTitleEl.length; i++) {
    const storeTitleSplit = $storeTitleEl[i].innerText.split(' ');
    const lastWord = storeTitleSplit.pop();
    const firstHalf = storeTitleSplit.join(' ');
    const newTitle = `<h2 class="store-locations__heading">${firstHalf} <span class="line-break">${lastWord}</span></h2>`;
    $storeTitleEl[i].outerHTML = newTitle;
  }
};

export default storeTitles;
