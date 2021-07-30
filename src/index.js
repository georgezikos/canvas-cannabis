import ageGate from './components/ageGate/ageGate';
import nav from './components/nav/nav';
import dailySpecials from './components/dailySpecials/dailySpecials';
import questionAnswerToggle from './components/frequentlyAskedQuestions/frequentlyAskedQuestions';

const init = () => {
  ageGate();
  nav();
  dailySpecials();
  questionAnswerToggle();
};

$(function () {
  init();
});
