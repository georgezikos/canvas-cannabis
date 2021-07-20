const canvasCannabis = {};

canvasCannabis.init = () => {
  canvasCannabis.mondaySpecials = $('#monday-specials');
  canvasCannabis.tuesdaySpecials = $('#tuesday-specials');
  canvasCannabis.wednesdaySpecials = $('#wednesday-specials');
  canvasCannabis.thursdaySpecials = $('#thursday-specials');
  canvasCannabis.currentDate = new Date();
  // reset inline display flex for off days?
  // correct this code + opt for dynamic class vs. inline-styling
  canvasCannabis.showSpecials = () => {
    if (
      canvasCannabis.currentDate.getDay() === 0 ||
      canvasCannabis.currentDate.getDay() === 6 ||
      canvasCannabis.currentDate.getDay() === 5
    ) {
      console.log('Not today, freak!');
    } else if (ccanvasCannabis.currentDate.getDay() === 1) {
      canvasCannabis.mondaySpecials.css('display', 'flex');
      console.log('Monday!');
    } else if (canvasCannabis.currentDate.getDay() === 2) {
      canvasCannabis.tuesdaySpecials.css('display', 'flex');
      console.log('Tuesday!');
    } else if (canvasCannabis.currentDate.getDay() === 3) {
      canvasCannabis.wednesdaySpecials.css('display', 'flex');
      console.log('Wednesday!');
    } else if (canvasCannabis.currentDate.getDay() === 4) {
      canvasCannabis.thursdaySpecials.css('display', 'flex');
      console.log('Thursday!');
    }
    canvasCannabis.dailySpecials();
  };
  canvasCannabis.showSpecials();
};

$(function () {
  canvasCannabis.init();
});
