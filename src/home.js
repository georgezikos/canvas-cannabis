import DailySpecials from './components/DailySpecials/DailySpecials';

const HomePage = () => {
  DailySpecials();
};

const init = () => {
  HomePage();
};

$(function () {
  init();
});
