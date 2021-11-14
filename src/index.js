import ButtonsLoadingState from './components/Buttons/ButtonsLoadingState';
import AgeGate from './components/Modals/AgeGate/AgeGate';
import ShopSegmentation from './components/Modals/ShopSegmentation/ShopSegmentation';
import CookiesConsent from './components/Modals/CookiesConsent/CookiesConsent';
import Nav from './components/Nav/Nav';
import DailySpecials from './components/DailySpecials/DailySpecials';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import SocialShare from './components/SocialShare/SocialShare';
import StoreAddressLinks from './components/StoreAddressLinks/StoreAddressLinks';
import storeTitles from './components/stores/storeTitles';

const global = () => {
  ButtonsLoadingState();
  AgeGate();
  ShopSegmentation();
  CookiesConsent();
  Nav();
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
  SocialShare();
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
