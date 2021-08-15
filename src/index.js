import ageGate from './components/modals/ageGate/ageGate';
import nav from './components/nav/nav';
import dailySpecials from './components/dailySpecials/dailySpecials';
import faq from './components/faq/faq';
import socialShare from './components/socialShare/socialShare';

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

const blog = () => {
  socialShare();
};

const init = () => {
  global();
  home();
  support();
  blog();
};

$(function () {
  init();
});
