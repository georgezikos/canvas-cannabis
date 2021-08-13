// Selectors
const $dailySpecialsHeading = $('h2.daily-specials__heading');
const $dailySpecialsBody = $('p.daily-specials__body');
const $dailySpecialsBtn = $('#daily-specials-btn');

// Days
const specials = {
  weekdays: {
    heading: 'Daily specials',
    prefix: 'Each',
    cta: 'Specials',
    days: {
      mondays: {
        label: 'Monday',
        products: 'Pre-Rolls',
      },
      tuesdays: {
        label: 'Tuesday',
        products: 'Cartridges & Disposable Vapes',
      },
      wednesdays: {
        label: 'Wednesday',
        products: 'Oils, Capsules & Concentrates',
      },
      thursdays: {
        label: 'Thursday',
        products: 'Edibles',
      },
    },
  },
  weekends: {
    heading: 'Staff picks',
    prefix: 'On',
    cta: 'Staff Picks',
    days: {
      weekends: {
        label: 'Weekends',
        products: 'Staff Picks',
      },
    },
  },
};

// Date
const currentDate = new Date();
const currentDay = currentDate.getDay();

// Other

const dailySpecials = () => {
  if (currentDay === 0 || currentDay === 6 || currentDay === 5) {
    $dailySpecialsHeading.text(specials.weekends.heading);
    $dailySpecialsBody.text(
      `${
        specials.weekends.prefix
      } ${specials.weekends.days.weekends.label.toLowerCase()} we feature our favourite ${
        specials.weekends.days.weekends.products
      } at 15% off their normal price. Shop today's deals below or visit your closest Canvas Cannabis location.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekends.cta}`);
  }
  // if (currentDay === 0 || currentDay === 6) {
  //   console.log('Not today, freak!');
  // } else if (currentDay === 1 || currentDay === 5) {
  //   $mondaySpecials.css('display', 'flex');
  //   console.log('Monday!');
  // } else if (currentDay === 2) {
  //   $tuesdaySpecials.css('display', 'flex');
  //   console.log('Tuesday!');
  // } else if (currentDay === 3) {
  //   $wednesdaySpecials.css('display', 'flex');
  //   console.log('Wednesday!');
  // } else if (currentDay === 4) {
  //   $thursdaySpecials.css('display', 'flex');
  //   console.log('Thursday!');
  // }
};

export default dailySpecials;
