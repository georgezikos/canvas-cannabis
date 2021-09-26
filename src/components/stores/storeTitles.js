const $storeTitle = $('h2.store-locations__heading');
const storeTitleSplit = $storeTitle.html().split();

const storeTitles = () => {
  for (let i = 0; i < $storeTitle.length; i++) {
    console.log($storeTitle[i]);
  }
};

export default storeTitles;
