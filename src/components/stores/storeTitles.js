const $storeTitle = $('h2.store-locations__heading');
const storeTitleSplit = $storeTitle.html().split();

const storeTitles = () => {
  console.log($storeTitle);
  console.log(storeTitleSplit);
};

export default storeTitles;
