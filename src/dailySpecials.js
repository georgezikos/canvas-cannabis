const dailySpecials = () => {
  const mondaySpecials = $('#monday-specials');
  const tuesdaySpecials = $('#tuesday-specials');
  const wednesdaySpecials = $('#wednesday-specials');
  const thursdaySpecials = $('#thursday-specials');
  let currentDate = new Date();
  // reset inline display flex for off days?
  // correct this code + opt for dynamic class vs. inline-styling
  if (
    currentDate.getDay() === 0 ||
    currentDate.getDay() === 6 ||
    currentDate.getDay() === 5
  ) {
    console.log('Not today, freak!');
  } else if (currentDate.getDay() === 1) {
    mondaySpecials.css('display', 'flex');
    console.log('Monday!');
  } else if (currentDate.getDay() === 2) {
    tuesdaySpecials.css('display', 'flex');
    console.log('Tuesday!');
  } else if (currentDate.getDay() === 3) {
    wednesdaySpecials.css('display', 'flex');
    console.log('Wednesday!');
  } else if (currentDate.getDay() === 4) {
    thursdaySpecials.css('display', 'flex');
    console.log('Thursday!');
  }
};

export default dailySpecials;
