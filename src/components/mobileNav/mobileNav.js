import './mobileNav.css';

// DOM Selectors
const $body = $('body');
const $hamburger = $('.main-nav__hamburger');
const $linksList = $('.main-nav__links-list');
// const $window = $(window);

// CSS Classes
const activeMobileNav = 'main-nav__links-list--active';
const disableScroll = 'active-nav';

// Other
const windowNavClose = 991;

// Functions
const navHandler = () => {
  $linksList.toggleClass(activeMobileNav);
  $body.toggleClass(disableScroll);
};

const mobileNav = () => {
  $hamburger.on('click', () => {
    navHandler();
  });
  if (
    $linksList.hasClass(activeMobileNav) &&
    window.innerWidth > windowNavClose
  ) {
    $linksList.removeClass(activeMobileNav);
    $body.removeClass(disableScroll);
  }
};

export default mobileNav;
