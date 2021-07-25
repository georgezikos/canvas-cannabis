import dailySpecials from './components/dailySpecials/dailySpecials';
import ageGate from './components/ageGate/ageGate';
import allDeviceNav from './components/allDeviceNav/allDeviceNav';
import questionAnswerToggle from './components/frequentlyAskedQuestions/frequentlyAskedQuestions';

const init = () => {
  dailySpecials();
  ageGate();
  allDeviceNav();
  questionAnswerToggle();
};

$(function () {
  init();
});
