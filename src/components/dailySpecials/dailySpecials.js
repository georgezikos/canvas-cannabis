// Selectors
const $dailySpecialsHeading = $('h2.daily-specials__heading');
const $dailySpecialsBody = $('p.daily-specials__body');
const $dailySpecialsBtn = $('#daily-specials-btn');

// Specials related
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

// Date related
const currentDate = new Date();
const currentDay = currentDate.getDay();

const dailySpecials = () => {
  if (currentDay === 0 || currentDay === 6 || currentDay === 5) {
    // refactor into a function that takes all of these repeating variables as arguments
    // see if I can use ternarys in place of some of these variables
    $dailySpecialsHeading.text(specials.weekends.heading);
    $dailySpecialsBody.text(
      `${specials.weekends.prefix} ${specials.weekends.days.weekends.label} we feature our favourite ${specials.weekends.days.weekends.products} at 15% off their normal price. Shop today's deals below or visit your closest Canvas Cannabis location.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekends.cta}`);
  } else if (currentDay === 4) {
    $dailySpecialsHeading.text(specials.weekdays.heading);
    $dailySpecialsBody.text(
      `${specials.weekdays.prefix} ${specials.weekdays.days.thursdays.label} we feature our favourite ${specials.weekdays.days.thursdays.products} at 15% off their normal price. Shop today's deals below or visit your closest Canvas Cannabis location.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekdays.cta}`);
  } else if (currentDay === 3) {
    $dailySpecialsHeading.text(specials.weekdays.heading);
    $dailySpecialsBody.text(
      `${specials.weekdays.prefix} ${specials.weekdays.days.wednesdays.label} we feature our favourite ${specials.weekdays.days.wednesdays.products} at 15% off their normal price. Shop today's deals below or visit your closest Canvas Cannabis location.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekdays.cta}`);
  } else if (currentDay === 2) {
    $dailySpecialsHeading.text(specials.weekdays.heading);
    $dailySpecialsBody.text(
      `${specials.weekdays.prefix} ${specials.weekdays.days.tuesdays.label} we feature our favourite ${specials.weekdays.days.tuesdays.products} at 15% off their normal price. Shop today's deals below or visit your closest Canvas Cannabis location.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekdays.cta}`);
  } else if (currentDay === 1) {
    $dailySpecialsHeading.text(specials.weekdays.heading);
    $dailySpecialsBody.text(
      `${specials.weekdays.prefix} ${specials.weekdays.days.mondays.label} we feature our favourite ${specials.weekdays.days.mondays.products} at 15% off their normal price. Shop today's deals below or visit your closest Canvas Cannabis location.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekdays.cta}`);
  }
};

export default dailySpecials;
