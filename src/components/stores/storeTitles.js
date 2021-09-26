const $storeTitleEl = $('h2.store-locations__heading');

const storeTitles = () => {
  for (let i = 0; i < $storeTitleEl.length; i++) {
    const storeTitleSplit = $storeTitleEl[i].innerText.split(' ');
    const storeTitleLength = storeTitleSplit.length;
    const lastWord = storeTitleSplit[storeTitleLength - 1];
    console.log(lastWord);
  }
};

export default storeTitles;
