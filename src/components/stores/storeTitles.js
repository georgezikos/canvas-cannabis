const $storeTitleEl = $('h2.store-locations__heading');

const storeTitles = () => {
  for (let i = 0; i < $storeTitleEl.length; i++) {
    let storeTitleSplit = $storeTitleEl[i].innerText.split(' ');
    let storeTitleLength = storeTitleSplit.length;
    let lastWord = storeTitleSplit[storeTitleLength - 1];
    console.log(lastWord);
  }
};

export default storeTitles;
