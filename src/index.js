import ageGate from './components/ageGate/ageGate';
import nav from './components/nav/nav';
import dailySpecials from './components/dailySpecials/dailySpecials';
import faq from './components/faq/faq';

const global = () => {
  ageGate();
  nav();
};

const home = () => {
  dailySpecials();
};

const support = () => {
  faq();
};

const init = () => {
  global();
  home();
  support();
};

$(function () {
  init();
});
