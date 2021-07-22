import './allDeviceNav.css';

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
const $dropdownLink = $('.main-nav__links-item--container');
const $linkListContainer = $('.main-nav__links-item--dropdown');

// Children
const $dropdownSubMenu = $('.main-nav__sub-menu');
const $dropdownIcon = $('.main-nav__dropdown-icon');

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
    // e.stopPropagation();
    // prettier-ignore
    const $openSubMenus = $(this).parent().siblings($linkListContainer); // Other open submenus
    if ($openSubMenus.find($dropdownSubMenu).hasClass(activeSubMenu)) {
      // Collapse other submenus that are open
      $openSubMenus.find($dropdownSubMenu).removeClass(activeSubMenu);
      // prettier-ignore
      $openSubMenus.find($dropdownSubMenu).prev($dropdownLink).find($dropdownIcon).removeClass(activeDropdownIcon);
    }
    $(this).next().toggleClass(activeSubMenu);
    $(this).find($dropdownIcon).toggleClass(activeDropdownIcon);
  });
};

const menuCloseHandler = () => {
  // Esc key to close menu
  $document.keyup((e) => {
    if ($linksList.hasClass(activeMobileNav) && e.keyCode === 27) {
      navHandler();
    } else if ($dropdownSubMenu.hasClass(activeSubMenu) && e.keyCode === 27) {
      $dropdownSubMenu.removeClass(activeSubMenu);
      $dropdownIcon.removeClass(activeDropdownIcon);
    }
  });
  // Window resize handler
  $window.on(
    'resize',
    () => {
      if (
        $linksList.hasClass(activeMobileNav) &&
        $window.width() > windowNavClose
      ) {
        navHandler();
      } else if (
        $dropdownSubMenu.hasClass(activeSubMenu) &&
        $window.width() <= windowNavClose // and not an orientation change
      ) {
        $dropdownSubMenu.removeClass(activeSubMenu);
        $dropdownIcon.removeClass(activeDropdownIcon);
      }
    },
    'orientationchange',
    () => {
      return;
    }
  );
  // Clicking away from element
  $document.on('click', (e) => {
    let $target = $(e.target);
    if (
      $window.width() > windowNavClose &&
      $dropdownSubMenu.hasClass(activeSubMenu) &&
      !$target.closest($mainNav).length
    ) {
      $dropdownSubMenu.removeClass(activeSubMenu);
      $dropdownIcon.removeClass(activeDropdownIcon);
      console.log('Clicked away');
    } else {
      return;
    }
  });
};

const allDeviceNav = () => {
  // Hamburger click handler
  $hamburger.on('click', () => {
    navHandler();
  });
  // Submenu functionality
  subMenuHandler();
  // Menu close functionalities
  menuCloseHandler();
};

export default allDeviceNav;
