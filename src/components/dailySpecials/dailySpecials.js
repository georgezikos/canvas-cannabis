// Selectors
const $dailySpecialsHeading = $('h2.daily-specials__heading');
const $dailySpecialsBody = $('p.daily-specials__body');
const $dailySpecialsBtn = $('#daily-specials-btn');
const $dailySpecialsImage = $('#daily-specials-img');

// Specials related
const specials = {
  weekdays: {
    heading: 'Daily cannabis specials',
    prefix: 'Each',
    cta: 'Specials',
    days: {
      mondays: {
        label: 'Monday',
        products: 'Cannabis Pre-Rolls',
        image:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/6177501457b46f0f978fc671_PreRolls_PureSunfarmsPreRollEdit_Original.png',
      },
      tuesdays: {
        label: 'Tuesday',
        products: 'Vaporizer Cartridges & Disposable Cannabis Vaporizers',
        image:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/617751f6c38ed3269c13195a_Cartridges_Wayfarer510Edit_Original.png',
      },
      wednesdays: {
        label: 'Wednesday',
        products: 'Cannabis and CBD Oils, Capsules & Concentrates',
        image:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/617751f7d7f42255edcab347_OilsCapsCons_PureSunfarmsCBDOilEdit_Original.png',
      },
      thursdays: {
        label: 'Thursday',
        products: 'Cannabis Edibles',
        image:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/617751f76ae48162b7a72673_Edibles_BhangChocolateEdit_Original.png',
      },
    },
  },
  weekends: {
    heading: `You've been invited`,
    prefix: 'On',
    cta: 'Collection',
    days: {
      weekends: {
        label: 'Weekends',
        products: 'Private Collection',
        image:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/617751f8c6ce6428b01b88b1_Weekends_PrivateCollection.png',
      },
    },
  },
};

// Date related
const currentDate = new Date();
const currentDay = currentDate.getDay();

const dailySpecials = () => {
  if (currentDay === 2 || currentDay === 6 || currentDay === 5) {
    // change 2 back to 0
    // refactor into a function that takes all of these repeating variables as arguments
    // see if I can use ternarys in place of some of these variables
    $dailySpecialsImage.attr('src', specials.weekends.days.weekends.image);
    $dailySpecialsHeading.text(specials.weekends.heading);
    $dailySpecialsBody.text(
      `${specials.weekends.prefix} ${specials.weekends.days.weekends.label} we feature our ${specials.weekends.days.weekends.products} of cannabis accessories. Hand carved and polished by a small team of generational wood craftsmen showcasing a range of natural tones and unique finishes. An aesthetic sure to fit in with your home décor.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekends.cta}`);
  } else if (currentDay === 4) {
    $dailySpecialsImage.attr('src', specials.weekdays.days.thursdays.image);
    $dailySpecialsHeading.text(specials.weekdays.heading);
    $dailySpecialsBody.text(
      `${specials.weekdays.prefix} ${specials.weekdays.days.thursdays.label} we feature our favourite ${specials.weekdays.days.thursdays.products} at 15% off their normal price. Shop today's deals below for Toronto cannabis delivery or visit a Canvas Cannabis dispensary near you.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekdays.cta}`);
  } else if (currentDay === 3) {
    $dailySpecialsImage.attr('src', specials.weekdays.days.wednesdays.image);
    $dailySpecialsHeading.text(specials.weekdays.heading);
    $dailySpecialsBody.text(
      `${specials.weekdays.prefix} ${specials.weekdays.days.wednesdays.label} we feature our favourite ${specials.weekdays.days.wednesdays.products} at 15% off their normal price. Shop today's deals below for Toronto cannabis delivery or visit a Canvas Cannabis dispensary near you.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekdays.cta}`);
  } else if (currentDay === 2) {
    $dailySpecialsImage.attr('src', specials.weekdays.days.tuesdays.image);
    $dailySpecialsHeading.text(specials.weekdays.heading);
    $dailySpecialsBody.text(
      `${specials.weekdays.prefix} ${specials.weekdays.days.tuesdays.label} we feature our favourite ${specials.weekdays.days.tuesdays.products} at 15% off their normal price. Shop today's deals below for Toronto cannabis delivery or visit a Canvas Cannabis dispensary near you.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekdays.cta}`);
  } else if (currentDay === 1) {
    $dailySpecialsImage.attr('src', specials.weekdays.days.mondays.image);
    $dailySpecialsHeading.text(specials.weekdays.heading);
    $dailySpecialsBody.text(
      `${specials.weekdays.prefix} ${specials.weekdays.days.mondays.label} we feature our favourite ${specials.weekdays.days.mondays.products} at 15% off their normal price. Shop today's deals below for Toronto cannabis delivery or visit a Canvas Cannabis dispensary near you.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekdays.cta}`);
  }
};

export default dailySpecials;
