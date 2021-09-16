import '../modals.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cookies from 'js-cookie';

// Selectors
const $acceptCookiesBtn = $('#accept-cookies');
const $cookiesConsentModal = $('.modal--cookies-consent');

// Cookie Names
const cookiesConsentCookie = 'acceptCookies';

// Classes
const getConsent = 'is--active';

// Functions
const cookiesConsentPrompt = () => {
  // Age gate has been cleared, show the cookies consent at a specific percentage down the page translateY into view
  $cookiesConsentModal.toggleClass(getConsent);

  gsap.registerPlugin(ScrollTrigger);
  gsap.to($cookiesConsentModal, {
    y: 0,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: '.thirds-section--featured-products',
    },
  });
  // destroy the scrollTrigger once it's done?
  $acceptCookiesBtn.on('click', function () {
    // When dismissed create cookie
    Cookies.set(cookiesConsentCookie, true, { expires: 30 });
    // Fire checkmark animation
    // translateY out of view
    // display none;
    $cookiesConsentModal.toggleClass(getConsent);
  });
};

const cookiesConsent = () => {
  if (Cookies.get(cookiesConsentCookie)) {
    // If the cookies existence returns true, we won't show the cookies consent prompt again for 30 days
    return;
  } else {
    // // If not, check for the existence of the age gate first
    // if ($ageGate.hasClass(activeAgeGate)) {
    //   // Age gate hasn't been clear so don't show the cookies consent yet
    //   return;
    // } else if (!$ageGate.hasClass(activeAgeGate)) {
    //   cookiesConsentPrompt();
    // }
    cookiesConsentPrompt();
  }
};

export default cookiesConsent;
