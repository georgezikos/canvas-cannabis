import ageGate from './components/ageGate/ageGate';
import nav from './components/nav/nav';
import dailySpecials from './components/dailySpecials/dailySpecials';
import faq from './components/faq/faq';

const init = () => {
  ageGate();
  nav();
  dailySpecials();
  faq();
};

$(function () {
  init();
});
