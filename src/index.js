import dailySpecials from './components/dailySpecials/dailySpecials';
import ageGate from './components/ageGate/ageGate';
import allDeviceNav from './components/allDeviceNav/allDeviceNav';
import questionAnswerToggle from './components/frequentlyAskedQuestions/frequentlyAskedQuestions';
// import socialShare from './components/socialShare/socialShare';

const init = () => {
  dailySpecials();
  ageGate();
  allDeviceNav();
  questionAnswerToggle();
  // socialShare();
};

$(function () {
  init();
});
