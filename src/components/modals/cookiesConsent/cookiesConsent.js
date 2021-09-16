import '../modals.css';
import { gsap } from 'gsap';
import Cookies from 'js-cookie';

// Selectors
const $acceptCookiesBtn = $('#accept-cookies');
const $cookiesConsentModal = $('.modal--cookies-consent');

// Cookie Names
const cookiesConsentCookie = 'acceptCookies';

// Classes
const getConsent = 'is--active';

const cookiesConsent = () => {
  if (Cookies.get(cookiesConsentCookie)) {
    // If the cookies existence returns true, we won't show the cookies consent prompt again for 30 days
    return;
  } else {
    // If not, show the prompt
    $cookiesConsentModal.toggleClass(getConsent);
    // After x amount of scroll translateY into view
    $acceptCookiesBtn.on('click', function () {
      // When dismissed create cookie
      Cookies.set(cookiesConsentCookie, true, { expires: 30 });
      // Fire checkmark animation
      // translateY out of view
      $cookiesConsentModal.toggleClass(getConsent);
    });
  }
};

export default cookiesConsent;
