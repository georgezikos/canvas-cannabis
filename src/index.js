import dailySpecials from './components/dailySpecials/dailySpecials';
import ageGate from './components/ageGate/ageGate';

const init = () => {
  dailySpecials();
  ageGate();
};

$(function () {
  init();
});
