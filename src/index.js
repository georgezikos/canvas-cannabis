import ageGate from './components/modals/ageGate/ageGate';
import shopSegmentation from './components/modals/shopSegmentation/shopSegmentation';
import nav from './components/nav/nav';
import dailySpecials from './components/dailySpecials/dailySpecials';
import faq from './components/faq/faq';
import socialShare from './components/socialShare/socialShare';
import addressLinks from './components/addressLinks/addressLinks';

const global = () => {
  ageGate();
  shopSegmentation();
  nav();
};

const home = () => {
  dailySpecials();
};

const stores = () => {
  addressLinks();
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
