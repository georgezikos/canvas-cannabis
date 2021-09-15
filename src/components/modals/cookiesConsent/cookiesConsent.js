import { gsap } from 'gsap';
import Cookies from 'js-cookie';

// Selectors
const $acceptCookiesBtn = $('#accept-cookies');
const $cookiesConsentModal = $('.modal--cookies-consent');

// Cookie Names
const cookiesConsentCookie = 'acceptCookies';

const cookiesConsent = () => {
  if (Cookies.get(cookiesConsentCookie)) {
    // If the cookies existence returns true, we won't show the cookies consent prompt again for
    return;
  } else {
    // If not, show the prompt
    $cookiesConsentModal.css('display', 'flex');
    // After x amount of scroll translateY into view
    $acceptCookiesBtn.on('click', function () {
      // When dismissed create cookie
      Cookies.set(cookiesConsentCookie, true, { expires: 30 }); // find out what kind of timeframe we can work with for this
      // Fire checkmark animation
      // translateY out of view
      $cookiesConsentModal.hide();
    });
  }
};

export default cookiesConsent;
