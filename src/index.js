import dailySpecials from './components/dailySpecials/dailySpecials';
import ageGate from './components/ageGate/ageGate';
import allDeviceNav from './components/allDeviceNav/allDeviceNav';

const init = () => {
  dailySpecials();
  ageGate();
  allDeviceNav();
};

$(function () {
  init();
});
