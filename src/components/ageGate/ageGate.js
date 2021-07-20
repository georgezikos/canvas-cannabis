import Cookies from 'js-cookie';
import './age-gate.css';

// DOM Selectors
const $body = $('body');
const $ageGate = $('.age-gate');
const $ageGateForm = $('.age-gate__form');
const $verifyAge = $('#verify-age');
const $rememberMe = $('#remember-me');
// const $confirmAge = $('#confirm-age'); submit button

// CSS Classes
const activeAgeGate = 'age-gate--active';
const disableScroll = 'active-modal';

// Cookie Names
const defaultCookie = 'default';
const rememberMeCookie = 'rememberMe';

const ageGate = () => {
  // Check if 24 hour or 30 day cookie exists
  if (Cookies.get(rememberMeCookie) || Cookies.get(defaultCookie)) {
    // $ageGate.remove();
    return;
  } else {
    // If neither exist, overlay is active (display flex), if either exists keep overlay hidden (default)
    // $ageGate add class activeAgeGate
    $ageGate.addClass(activeAgeGate);
    // If the overlay is active, prevent page scroll – body overflow hidden/auto
    // $body add class disableScroll
    $body.addClass(disableScroll);
    console.log('No Cookies!');
  }
  $ageGateForm.submit((e) => {
    e.preventDefault();
    if (!$verifyAge.prop('checked')) {
      console.log(`I'm underage`);
      return;
      // reject totally;
      // If 19+ is not checked reject/error handle
    } else if ($verifyAge.prop('checked') && !$rememberMe.prop('checked')) {
      console.log(`I'm of age, but don't remember me`);
      Cookies.set(defaultCookie, true, { expires: 1 });
      $ageGate.removeClass(activeAgeGate);
      $body.removeClass(disableScroll);
      // $ageGate.remove();
      // If 19+ is checked but remember me is not, create 24 hour cookie and hide overlay and remove from DOM?
    } else if ($verifyAge.prop('checked') && $rememberMe.prop('checked')) {
      console.log(`I'm of age AND remember me`);
      Cookies.set(rememberMeCookie, true, { expires: 30 });
      $ageGate.removeClass(activeAgeGate);
      $body.removeClass(disableScroll);
      // $ageGate.remove();
      // If 19+ is checked and remember is checked, create 30 day cookie and hide overlay and remove from DOM?
    }
  });
};

export default ageGate;
