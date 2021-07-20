import dailySpecials from './dailySpecials';
import ageGate from './ageGate';

const init = () => {
  dailySpecials();
  ageGate();
};

$(function () {
  init();
});
