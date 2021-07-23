// reset inline display flex for off days?
// correct this code + opt for dynamic class vs. inline-styling

const $mondaySpecials = $('#monday-specials');
const $tuesdaySpecials = $('#tuesday-specials');
const $wednesdaySpecials = $('#wednesday-specials');
const $thursdaySpecials = $('#thursday-specials');
const currentDate = new Date();
const currentDay = currentDate.getDay();

const dailySpecials = () => {
  if (currentDay === 0 || currentDay === 6) {
    console.log('Not today, freak!');
  } else if (currentDay === 1 || currentDay === 5) {
    $mondaySpecials.css('display', 'flex');
    console.log('Monday!');
  } else if (currentDay === 2) {
    $tuesdaySpecials.css('display', 'flex');
    console.log('Tuesday!');
  } else if (currentDay === 3) {
    $wednesdaySpecials.css('display', 'flex');
    console.log('Wednesday!');
  } else if (currentDay === 4) {
    $thursdaySpecials.css('display', 'flex');
    console.log('Thursday!');
  }
};

export default dailySpecials;
