// import { gsap } from 'gsap';

const $acceptCookiesBtn = $('#accept-cookies');
const $cookiesConsentModal = $('.modal--cookies-consent');

// Check for existence of cookie
// After x amount of scroll translateY into view
// When dismissed create cookie
// Fire checkmark animation
// translateY out of view

const cookiesConsent = () => {
  $acceptCookiesBtn.on('click', function () {
    // Temporary dismissal functionality
    $cookiesConsentModal.hide();
  });
};

export default cookiesConsent;
