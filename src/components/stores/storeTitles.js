const $storeTitle = $('h2.store-locations__heading');

const storeTitles = () => {
  for (let i = 0; i < $storeTitle.length; i++) {
    console.log($storeTitle[i]);
  }
};

export default storeTitles;
