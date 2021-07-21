import dailySpecials from './components/dailySpecials/dailySpecials';
import ageGate from './components/ageGate/ageGate';
import mobileNav from './components/mobileNav/mobileNav';

const init = () => {
  dailySpecials();
  ageGate();
  mobileNav();
};

$(function () {
  init();
});
