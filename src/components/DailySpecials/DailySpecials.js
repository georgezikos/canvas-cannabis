// Selectors
const $dailySpecialsHeading = $('h2.daily-specials__heading');
const $dailySpecialsBody = $('p.daily-specials__body');
const $dailySpecialsBtn = $('#daily-specials-btn');
const $dailySpecialsImage = $('#daily-specials-img');
const $dailySpecialsShadow = $('#daily-specials-shadow');

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
          'https://assets.website-files.com/60cfd1175523ac59337574a3/617ee7acab65e4717346a695_PreRolls_PureSunfarmsPreRollEdit_Compressed.png',
        shadow:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/617ee7aa635b9a8bf93629fd_PreRollsShadow_Compressed.png',
      },
      tuesdays: {
        label: 'Tuesday',
        products: 'Vaporizer Cartridges & Disposable Cannabis Vaporizers',
        image:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/617ee7ac885c2b150f52f4e4_Cartridges_Wayfarer510Edit_Compressed.png',
        shadow:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/617ee7ac2e706145a23ea059_CartridgesShadow_Compressed.png',
      },
      wednesdays: {
        label: 'Wednesday',
        products: 'Cannabis and CBD Oils, Capsules & Concentrates',
        image:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/619560fab20d7b333bca19e0_OilsCapsCons_PureSunfarmsCBDOilEdit_Compressed.png',
        shadow:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/617ee7ab05aa1e5274a2962c_OilsCapsConsShadow_Compressed.png',
      },
      thursdays: {
        label: 'Thursday',
        products: 'Cannabis Edibles',
        image:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/617ee7ad5ecb8e9a5a1deeaa_Edibles_BhangChocolateEdit_Compressed.png',
        shadow:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/617ee7ab234721b873042958_EdiblesShadow_Compressed.png',
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
          'https://assets.website-files.com/60cfd1175523ac59337574a3/617ee7ad26a5a4dbf9f2440d_Weekends_PrivateCollectionEdit_Compressed.png',
        shadow:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/617ee7aabfffe95924193ec1_PrivateCollectionShadow_Compressed.png',
      },
    },
  },
};

// Date related
const currentDate = new Date();
const currentDay = currentDate.getDay();

const DailySpecials = () => {
  if (currentDay === 0 || currentDay === 6 || currentDay === 5) {
    // refactor into a function that takes all of these repeating variables as arguments
    // see if I can use ternarys in place of some of these variables
    $dailySpecialsImage.attr('src', specials.weekends.days.weekends.image);
    $dailySpecialsShadow.attr('src', specials.weekends.days.weekends.shadow);
    $dailySpecialsImage.attr('srcset', specials.weekends.days.weekends.image);
    $dailySpecialsShadow.attr('srcset', specials.weekends.days.weekends.shadow);
    $dailySpecialsHeading.text(specials.weekends.heading);
    $dailySpecialsBody.text(
      `${specials.weekends.prefix} ${specials.weekends.days.weekends.label} we feature our ${specials.weekends.days.weekends.products} of cannabis accessories. Hand carved and polished by a small team of generational wood craftsmen showcasing a range of natural tones and unique finishes. An aesthetic sure to fit in with your home décor.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekends.cta}`);
  } else if (currentDay === 4) {
    $dailySpecialsImage.attr('src', specials.weekdays.days.thursdays.image);
    $dailySpecialsShadow.attr('src', specials.weekdays.days.thursdays.shadow);
    $dailySpecialsImage.attr('srcset', specials.weekdays.days.thursdays.image);
    $dailySpecialsShadow.attr(
      'srcset',
      specials.weekdays.days.thursdays.shadow
    );
    $dailySpecialsHeading.text(specials.weekdays.heading);
    $dailySpecialsBody.text(
      `${specials.weekdays.prefix} ${specials.weekdays.days.thursdays.label} we feature our favourite ${specials.weekdays.days.thursdays.products} at 10% off their normal price. Shop today's deals below for Toronto cannabis delivery or visit a Canvas Cannabis dispensary near you.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekdays.cta}`);
  } else if (currentDay === 3) {
    $dailySpecialsImage.attr('src', specials.weekdays.days.wednesdays.image);
    $dailySpecialsShadow.attr('src', specials.weekdays.days.wednesdays.shadow);
    $dailySpecialsImage.attr('srcset', specials.weekdays.days.wednesdays.image);
    $dailySpecialsShadow.attr(
      'srcset',
      specials.weekdays.days.wednesdays.shadow
    );
    $dailySpecialsHeading.text(specials.weekdays.heading);
    $dailySpecialsBody.text(
      `${specials.weekdays.prefix} ${specials.weekdays.days.wednesdays.label} we feature our favourite ${specials.weekdays.days.wednesdays.products} at 10% off their normal price. Shop today's deals below for Toronto cannabis delivery or visit a Canvas Cannabis dispensary near you.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekdays.cta}`);
  } else if (currentDay === 2) {
    $dailySpecialsImage.attr('src', specials.weekdays.days.tuesdays.image);
    $dailySpecialsShadow.attr('src', specials.weekdays.days.tuesdays.shadow);
    $dailySpecialsImage.attr('srcset', specials.weekdays.days.tuesdays.image);
    $dailySpecialsShadow.attr('srcset', specials.weekdays.days.tuesdays.shadow);
    $dailySpecialsHeading.text(specials.weekdays.heading);
    $dailySpecialsBody.text(
      `${specials.weekdays.prefix} ${specials.weekdays.days.tuesdays.label} we feature our favourite ${specials.weekdays.days.tuesdays.products} at 10% off their normal price. Shop today's deals below for Toronto cannabis delivery or visit a Canvas Cannabis dispensary near you.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekdays.cta}`);
  } else if (currentDay === 1) {
    $dailySpecialsImage.attr('src', specials.weekdays.days.mondays.image);
    $dailySpecialsShadow.attr('src', specials.weekdays.days.mondays.shadow);
    $dailySpecialsImage.attr('srcset', specials.weekdays.days.mondays.image);
    $dailySpecialsShadow.attr('srcset', specials.weekdays.days.mondays.shadow);
    $dailySpecialsHeading.text(specials.weekdays.heading);
    $dailySpecialsBody.text(
      `${specials.weekdays.prefix} ${specials.weekdays.days.mondays.label} we feature our favourite ${specials.weekdays.days.mondays.products} at 10% off their normal price. Shop today's deals below for Toronto cannabis delivery or visit a Canvas Cannabis dispensary near you.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekdays.cta}`);
  }
};

export default DailySpecials;
