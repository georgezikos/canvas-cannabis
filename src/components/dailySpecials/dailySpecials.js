// Selectors
const $dailySpecialsHeading = $('h2.daily-specials__heading');
const $dailySpecialsBody = $('p.daily-specials__body');
const $dailySpecialsBtn = $('#daily-specials-btn');

// Specials related
const specials = {
  weekdays: {
    heading: 'Daily cannabis specials',
    prefix: 'Each',
    cta: 'Specials',
    days: {
      mondays: {
        label: 'Monday',
        products: 'Cannabis Pre-Rolls', // Cannabis Pre-Rolls
      },
      tuesdays: {
        label: 'Tuesday',
        products: 'Vaporizer Cartridges & Disposable Cannabis Vaporizers', // 'Vaporizer Cartridges & Disposable Cannabis Vaporizers'
      },
      wednesdays: {
        label: 'Wednesday',
        products: 'Cannabis and CBD Oils, Capsules & Concentrates', // 'Cannabis and CBD Oils, Capsules & Concentrates'/
      },
      thursdays: {
        label: 'Thursday',
        products: 'Cannabis Edibles', // 'Cannabis Edibles'
      },
    },
  },
  weekends: {
    heading: 'Budtender picks',
    prefix: 'On',
    cta: 'Specials',
    days: {
      weekends: {
        label: 'Weekends',
        products: 'Budtender Picks',
      },
    },
  },
};

// Date related
const currentDate = new Date();
const currentDay = currentDate.getDay();

const dailySpecials = () => {
  if (currentDay === 0 || currentDay === 6 || currentDay === 5) {
    // refactor into a function that takes all of these repeating variables as arguments
    // see if I can use ternarys in place of some of these variables
    $dailySpecialsHeading.text(specials.weekends.heading);
    $dailySpecialsBody.text(
      `${specials.weekends.prefix} ${specials.weekends.days.weekends.label} we feature our favourite ${specials.weekends.days.weekends.products} which include cannabis flower, vaporizers, edibles and a range of CBD products including CBD oils at 15% off their normal price. Shop today's deals below for Toronto cannabis delivery or visit a Canvas Cannabis dispensary near you.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekends.cta}`);
  } else if (currentDay === 4) {
    $dailySpecialsHeading.text(specials.weekdays.heading);
    $dailySpecialsBody.text(
      `${specials.weekdays.prefix} ${specials.weekdays.days.thursdays.label} we feature our favourite ${specials.weekdays.days.thursdays.products} at 15% off their normal price. Shop today's deals below for Toronto cannabis delivery or visit a Canvas Cannabis dispensary near you.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekdays.cta}`);
  } else if (currentDay === 3) {
    $dailySpecialsHeading.text(specials.weekdays.heading);
    $dailySpecialsBody.text(
      `${specials.weekdays.prefix} ${specials.weekdays.days.wednesdays.label} we feature our favourite ${specials.weekdays.days.wednesdays.products} at 15% off their normal price. Shop today's deals below for Toronto cannabis delivery or visit a Canvas Cannabis dispensary near you.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekdays.cta}`);
  } else if (currentDay === 2) {
    $dailySpecialsHeading.text(specials.weekdays.heading);
    $dailySpecialsBody.text(
      `${specials.weekdays.prefix} ${specials.weekdays.days.tuesdays.label} we feature our favourite ${specials.weekdays.days.tuesdays.products} at 15% off their normal price. Shop today's deals below for Toronto cannabis delivery or visit a Canvas Cannabis dispensary near you.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekdays.cta}`);
  } else if (currentDay === 1) {
    $dailySpecialsHeading.text(specials.weekdays.heading);
    $dailySpecialsBody.text(
      `${specials.weekdays.prefix} ${specials.weekdays.days.mondays.label} we feature our favourite cannabis ${specials.weekdays.days.mondays.products} at 15% off their normal price. Shop today's deals below for Toronto cannabis delivery or visit a Canvas Cannabis dispensary near you.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekdays.cta}`);
  }
};

export default dailySpecials;
