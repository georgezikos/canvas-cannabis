import Cookies from 'js-cookie';
import '../modals.css';

// Selectors
const $body = $('body');
const $html = $('html');
const $ageGate = $('.modal--age-gate'); // containing element
const $ageGateForm = $('.modal__form--age-gate');
const $verifyAge = $('#verify-age');
const $rememberMe = $('#remember-me');

// Classes
const activeAgeGate = 'modal--active';
const disableScroll = 'active-modal';

// Cookie Names
const defaultCookie = 'default';
const rememberMeCookie = 'rememberMe';

// Functions
const cookiesOrLegal = () => {
  if (
    Cookies.get(rememberMeCookie) ||
    Cookies.get(defaultCookie) ||
    window.location.href.indexOf('legal') > -1
  ) {
    // If either case returns true, we won't show the age gate
    return;
  } else {
    // If either case returns false, we age gate the website
    $ageGate.addClass(activeAgeGate);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
  }
};

const validateAge = () => {
  if (!$verifyAge.prop('checked')) {
    // If they haven't verified their age, they are unable to clear the age gate
    // styling for the on-screen checkbox
    const $onScreenCheckbox = $verifyAge.prev('.form__checkbox');
    $onScreenCheckbox.addClass('is--invalid');
    $('.form__caption--invalid').show();
    return;
  } else if ($verifyAge.prop('checked') && !$rememberMe.prop('checked')) {
    // If they only verify their age, but do not wanted to be remembered, let them in and create a cookie to account for repeat visits within a 24-hour period and clear the age gate
    Cookies.set(defaultCookie, true, { expires: 1 });
    $ageGate.removeClass(activeAgeGate);
    $html.removeClass(disableScroll);
    $body.removeClass(disableScroll);
    return;
  } else if ($verifyAge.prop('checked') && $rememberMe.prop('checked')) {
    // If they verify their age and also want to be remembered, create a cookie for a 30-day period and clear the age gate
    Cookies.set(rememberMeCookie, true, { expires: 30 });
    $ageGate.removeClass(activeAgeGate);
    $html.removeClass(disableScroll);
    $body.removeClass(disableScroll);
    return;
  }
};

const ageGate = () => {
  $verifyAge.attr('aria-required', 'true');
  // Checks for the existence of cookies and whether or not the user is on the Legal page
  cookiesOrLegal();
  // Deals with the age verification and cookie creation logic
  $ageGateForm.submit((e) => {
    e.preventDefault();
    validateAge();
  });
};

export default ageGate;
