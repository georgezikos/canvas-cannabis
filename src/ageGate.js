import Cookies from 'js-cookie';
import './age-gate.css';

// DOM Selectors
const $body = $('body');
const $ageGate = $('.age-gate');
const $ageGateForm = $('.age-gate__form');
// const $verifyAge = $('#verify-age'); submit button
const $rememberMe = $('#remember-me');
const $confirmAge = $('#confirm-age');

// CSS Classes
const activeAgeGate = 'age-gate--active';
const disableScroll = 'active-modal';

// Cookies
// Cookies.set('Remember Me', true, { expires: 30 });
// Cookies.set('Default', true, { expires: 1 });

const ageGate = () => {
  // Check if 24 hour or 30 day cookie exists
  if (Cookies.get('Remember Me') || Cookies.get('Default')) {
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
  if (!$rememberMe.prop('checked')) {
    console.log('Unchecked');
  }
  $ageGateForm.submit((e) => {
    e.preventDefault();
    if ($rememberMe.prop('checked')) {
      console.log('Remember Me');
    } else {
      console.log(`Don't Remember Me!`);
    }
    console.log('Clicking Button');
  });
  // If 19+ is checked but remember me is not, create 24 hour cookie and hide overlay and remove from DOM?

  // If 19+ is checked and remember is checked, create 30 day cookie and hide overlay and remove from DOM?
  // If 19+ is not checked reject/error handle
};

export default ageGate;
