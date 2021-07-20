import dailySpecials from './dailySpecials';

const canvasCannabis = { dailySpecials: dailySpecials() };

canvasCannabis.init = () => {
  canvasCannabis.dailySpecials();
};

$(function () {
  canvasCannabis.init();
});
