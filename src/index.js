import ButtonsLoadingState from './components/Buttons/ButtonsLoadingState';
import ageGate from './components/modals/ageGate/ageGate';
import shopSegmentation from './components/modals/shopSegmentation/shopSegmentation';
import cookiesConsent from './components/modals/cookiesConsent/cookiesConsent';
import nav from './components/nav/nav';
import DailySpecials from './components/DailySpecials/DailySpecials';
import faq from './components/faq/faq';
import socialShare from './components/socialShare/socialShare';
import StoreAddressLinks from './components/StoreAddressLinks/StoreAddressLinks';
import storeTitles from './components/stores/storeTitles';

const global = () => {
  ButtonsLoadingState();
  ageGate();
  shopSegmentation();
  cookiesConsent();
  nav();
};

const home = () => {
  DailySpecials();
};

const stores = () => {
  storeTitles();
  StoreAddressLinks();
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
