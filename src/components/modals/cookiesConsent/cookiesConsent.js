// import { gsap } from 'gsap';

const $acceptCookiesBtn = $('#accept-cookies');
const $cookiesConsentModal = $('.modal--cookies-consent');

const cookiesConsent = () => {
  $acceptCookiesBtn.on('click', function () {
    // Temporary dismissal functionality
    $cookiesConsentModal.hide();
    console.log('clicked');
  });
};

export default cookiesConsent;
