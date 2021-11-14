import buttonsWaiting from './components/buttons/buttonsWaiting';
import ageGate from './components/modals/ageGate/ageGate';
import shopSegmentation from './components/modals/shopSegmentation/shopSegmentation';
import cookiesConsent from './components/modals/cookiesConsent/cookiesConsent';
import nav from './components/nav/nav';
import dailySpecials from './components/dailySpecials/dailySpecials';
import faq from './components/faq/faq';
import socialShare from './components/socialShare/socialShare';
import storeAddressLinks from './components/StoreAddressLinks/StoreAddressLinks';
import storeTitles from './components/stores/storeTitles';

const global = () => {
  buttonsWaiting();
  ageGate();
  shopSegmentation();
  cookiesConsent();
  nav();
};

const home = () => {
  dailySpecials();
};

const stores = () => {
  storeTitles();
  storeAddressLinks();
};

const support = () => {
  faq();
};

const blog = () => {
  socialShare();
};

const init = () => {
  global();
  home();
  stores();
  support();
  blog();
};

$(function () {
  init();
});
