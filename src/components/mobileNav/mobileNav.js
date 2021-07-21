import './mobileNav.css';

// DOM Selectors
const $window = $(window);
const $body = $('body');
const $hamburger = $('.main-nav__hamburger');
const $linksList = $('.main-nav__links-list');
const $mainNav = $('nav.main-nav');
const $navLogo = $('img.main-nav__logo');
const $hamburgerBottom = $('div.hamburger__bottom');
const $hamburgerTop = $('div.hamburger__top');

// CSS Classes
const activeMobileNav = 'main-nav__links-list--active';
const disableScroll = 'active-nav';
const mainNavActiveMobile = 'main-nav--active-mobile';
const navLogoActiveMobile = 'main-nav__logo--active-mobile';
const hamburgerBunsActiveMobile = 'hamburger--active';

// Other
const windowNavClose = 991;

// Functions
const navHandler = () => {
  $mainNav.toggleClass(mainNavActiveMobile);
  $navLogo.toggleClass(navLogoActiveMobile);
  $body.toggleClass(disableScroll);
  if (!$mainNav.hasClass('main-nav--dark')) {
    console.log('It does');
    $hamburgerBottom.toggleClass(hamburgerBunsActiveMobile);
    $hamburgerTop.toggleClass(hamburgerBunsActiveMobile);
    $linksList.toggleClass(activeMobileNav);
  }
};

const mobileNav = () => {
  // Hamburger click handler
  $hamburger.on('click', () => {
    navHandler();
  });
  // Window resize handler
  $window.on('resize', () => {
    if (
      $linksList.hasClass(activeMobileNav) &&
      $window.width() > windowNavClose
    ) {
      navHandler();
    }
  });
};

export default mobileNav;
