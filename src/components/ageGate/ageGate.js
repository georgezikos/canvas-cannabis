import Cookies from 'js-cookie';
import './ageGate.css';

// Selectors
const $body = $('body');
const $html = $('html');
const $ageGate = $('.age-gate');
const $ageGateForm = $('.age-gate__form');
const $verifyAge = $('#verify-age');
const $rememberMe = $('#remember-me');

// Classes
const activeAgeGate = 'age-gate--active';
const disableScroll = 'active-modal';

// Cookie Names
const defaultCookie = 'default';
const rememberMeCookie = 'rememberMe';

const ageGate = () => {
  // Checks for the existence of cookies
  if (
    Cookies.get(rememberMeCookie) ||
    Cookies.get(defaultCookie) ||
    window.location.href.indexOf('legal') > -1
  ) {
    // Does nothing if they have an active cookies
    console.log(window.location.href);
    return;
  } else {
    // Shows the age gate otherwise
    $ageGate.addClass(activeAgeGate);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
  }
  $ageGateForm.submit((e) => {
    e.preventDefault();
    if (!$verifyAge.prop('checked')) {
      // If they haven't verified their age, nothing happens on submit
      return;
    } else if ($verifyAge.prop('checked') && !$rememberMe.prop('checked')) {
      // If they only verify their age, but do not wanted to be remembered, let them in and create a 24-hour cookie
      Cookies.set(defaultCookie, true, { expires: 1 });
      $ageGate.removeClass(activeAgeGate);
      $html.removeClass(disableScroll);
      $body.removeClass(disableScroll);
      return;
    } else if ($verifyAge.prop('checked') && $rememberMe.prop('checked')) {
      // If they verify their age and also want to be remembered, let them in and create a 30-day cookie
      Cookies.set(rememberMeCookie, true, { expires: 30 });
      $ageGate.removeClass(activeAgeGate);
      $html.removeClass(disableScroll);
      $body.removeClass(disableScroll);
      return;
    }
  });
};

export default ageGate;
