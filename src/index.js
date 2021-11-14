import ButtonsLoadingState from './components/Buttons/ButtonsLoadingState';
import AgeGate from './components/Modals/AgeGate/AgeGate';
import ShopSegmentation from './components/Modals/ShopSegmentation/ShopSegmentation';
import CookiesConsent from './components/Modals/CookiesConsent/CookiesConsent';
import nav from './components/nav/nav';
import DailySpecials from './components/DailySpecials/DailySpecials';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import socialShare from './components/socialShare/socialShare';
import StoreAddressLinks from './components/StoreAddressLinks/StoreAddressLinks';
import storeTitles from './components/stores/storeTitles';

const global = () => {
  ButtonsLoadingState();
  AgeGate();
  ShopSegmentation();
  CookiesConsent();
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
  FrequentlyAskedQuestions();
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
