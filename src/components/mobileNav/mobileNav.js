import './mobileNav.css';

// Selectors
const $window = $(window);
const $document = $(document);
const $body = $('body');
const $html = $('html');
const $hamburger = $('.main-nav__hamburger');
const $linksList = $('.main-nav__links-list');
const $mainNav = $('nav.main-nav');
const $navLogo = $('img.main-nav__logo');
const $hamburgerBottom = $('div.hamburger__bottom');
const $hamburgerTop = $('div.hamburger__top');

// Parent
const $dropdownLink = $('.main-nav__links-item--container'); // onclick

// Children
const $dropdownSubMenu = $('.main-nav__sub-menu'); // display: block;
const $dropdownIcon = $('.main-nav__dropdown-icon'); // rotateZ -180deg

// Classes
const activeMobileNav = 'main-nav__links-list--active';
const disableScroll = 'active-nav';
const mainNavActiveMobile = 'main-nav--active-mobile';
const navLogoActiveMobile = 'main-nav__logo--active-mobile';
const hamburgerBunsActiveMobile = 'hamburger--active-mobile';
const mainNavDark = 'main-nav--dark';
const activeDropdownIcon = 'main-nav__dropdown-icon--active';
const activeSubMenu = 'main-nav__sub-menu--active';

// Other
const windowNavClose = 991; // If the mobile menu is left open, this width will trigger a menu close

// Functions
const navHandler = () => {
  $html.toggleClass(disableScroll);
  $body.toggleClass(disableScroll);
  $linksList.toggleClass(activeMobileNav);
  // Handling dependent on UI theme
  if (!$mainNav.hasClass(mainNavDark)) {
    $mainNav.toggleClass(mainNavActiveMobile);
    $navLogo.toggleClass(navLogoActiveMobile);
    $hamburgerBottom.toggleClass(hamburgerBunsActiveMobile);
    $hamburgerTop.toggleClass(hamburgerBunsActiveMobile);
  }
  // Collapsing submenus
  if ($dropdownSubMenu.hasClass(activeSubMenu)) {
    $dropdownSubMenu.removeClass(activeSubMenu);
    $dropdownIcon.removeClass(activeDropdownIcon);
  }
};

const subMenuHandler = () => {
  $dropdownLink.on('click', function () {
    $dropdownSubMenu.removeClass(activeSubMenu);
    $dropdownIcon.removeClass(activeDropdownIcon);
    $(this).next().toggleClass(activeSubMenu);
    $(this).find($dropdownIcon).toggleClass(activeDropdownIcon);
  });
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
  // Esc key to close menu
  $document.keyup((e) => {
    if ($linksList.hasClass(activeMobileNav) && e.keyCode === 27) navHandler();
  });
  // Submenu functionality
  subMenuHandler();
};

export default mobileNav;
