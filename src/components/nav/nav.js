import './nav.css';

// Selectors
// Global
const $window = $(window);
const $document = $(document);
const $body = $('body');
const $html = $('html');

// Nav
const $mainNav = $('nav.main-nav'); // Nav element

// Hamburger Elements
const $hamburger = $('.main-nav__hamburger'); // Containing element
const $hamburgerTop = $('div.hamburger__top'); // Top bun
const $hamburgerBottom = $('div.hamburger__bottom'); // Bottom bun

// Links
const $linksList = $('.main-nav__links-list'); // Containing element
const $dropdownParent = $('.main-nav__links-item--dropdown'); // Links with dropdown navigation modifier
const $dropdownChildren = $('.links-item__container'); // Link and chevron container
const $dropdownIcon = $('.main-nav__dropdown-icon-bounding'); // Dropdown chevron icon
const $dropdownSubMenu = $('.main-nav__sub-menu'); // Containing element of sub-menu link lists

// Classes
const disableScroll = 'active-nav';
const activeMobileNav = 'main-nav__links-list--active';

const mainNavActiveMobile = 'main-nav--active-mobile';
const navLogoActiveMobile = 'main-nav__logo--active-mobile';
const mainNavDark = 'main-nav--dark';

const hamburgerBunsActiveMobile = 'hamburger--active-mobile';
const activeDropdownIcon = 'main-nav__dropdown-icon-bounding--active';
const activeSubMenu = 'main-nav__sub-menu--active';

// Other
const windowNavClose = 991; // If the mobile menu is left open, growing the window beyond this width will trigger a menu close

// Functions
// Deals with showing and hiding the menu on smaller viewports
const mobileNavHandler = () => {
  $html.toggleClass(disableScroll);
  $body.toggleClass(disableScroll);
  $linksList.toggleClass(activeMobileNav);
  // Collapsing open submenus
  if ($dropdownSubMenu.hasClass(activeSubMenu)) {
    $dropdownSubMenu.removeClass(activeSubMenu);
    $dropdownIcon.removeClass(activeDropdownIcon);
  }
};

const subMenuHandler = () => {
  $dropdownChildren.on('click', function () {
    // Checking for any open sub-menus
    // prettier-ignore
    const $openSubMenus = $(this).parent().siblings($dropdownParent); // Siblings that also have sub-menu functionality
    if ($openSubMenus.find($dropdownSubMenu).hasClass(activeSubMenu)) {
      // If there are other open sub-menus, collapse them
      $openSubMenus.find($dropdownSubMenu).removeClass(activeSubMenu);
      // prettier-ignore
      $openSubMenus.find($dropdownSubMenu).prev($dropdownChildren).find($dropdownIcon).removeClass(activeDropdownIcon);
    }
    $(this).next().toggleClass(activeSubMenu); // Open the sub-menu corresponding with the link
    // Deals with changes that happen when you click the same link to then close the sub-menu
    // prettier-ignore
    if ($(this).find($dropdownIcon).hasClass(activeDropdownIcon)) {
      $(this).find($dropdownIcon).removeClass(activeDropdownIcon);
    } else {
      $(this).find($dropdownIcon).addClass(activeDropdownIcon);
    }
  });
};

const menuCloseHandler = () => {
  // Esc key to close menu
  $document.keyup((e) => {
    if ($linksList.hasClass(activeMobileNav) && e.keyCode === 27) {
      mobileNavHandler();
    } else if ($dropdownSubMenu.hasClass(activeSubMenu) && e.keyCode === 27) {
      $dropdownSubMenu.removeClass(activeSubMenu);
      $('.main-nav__dropdown-icon-bounding--active').removeClass(
        activeDropdownIcon
      );
    }
  });

  // Window resize handler
  $window.on('resize', () => {
    if (
      $linksList.hasClass(activeMobileNav) &&
      $window.width() > windowNavClose
    ) {
      mobileNavHandler();
    } else if (
      $dropdownSubMenu.hasClass(activeSubMenu) &&
      $window.width() <= windowNavClose // and not an orientation change, currently collapses submenus on orientation change
    ) {
      $dropdownSubMenu.removeClass(activeSubMenu);
      $('.main-nav__dropdown-icon-bounding--active').removeClass(
        activeDropdownIcon
      );
    }
  });

  // Clicking away from element
  $document.on('click', (e) => {
    let $target = $(e.target);
    if (
      $window.width() > windowNavClose &&
      $dropdownSubMenu.hasClass(activeSubMenu) &&
      !$target.closest($mainNav).length
    ) {
      $dropdownSubMenu.removeClass(activeSubMenu);
      $('.main-nav__dropdown-icon-bounding--active').removeClass(
        activeDropdownIcon
      );
      console.log('Clicked away');
    } else {
      return;
    }
  });

  // Scroll away handler
  const scrollAwayClose = () => {
    let lastScroll = 0;
    $window.scroll(function () {
      let currentScroll = $window.scrollTop();
      if (currentScroll < 0) {
        return;
      }
      if (currentScroll === 0 && $dropdownSubMenu.hasClass(activeSubMenu)) {
        return;
      }
      if (
        currentScroll > lastScroll &&
        $dropdownSubMenu.hasClass(activeSubMenu)
      ) {
        // down
        //prettier-ignore
        $dropdownSubMenu.removeClass(activeSubMenu);
        $('.main-nav__dropdown-icon-bounding--active').removeClass(
          activeDropdownIcon
        );
        return;
      } else if (
        currentScroll < lastScroll &&
        $dropdownSubMenu.hasClass(activeSubMenu) &&
        currentScroll === 0
      ) {
        $dropdownSubMenu.removeClass(activeSubMenu);
        $('.main-nav__dropdown-icon-bounding--active').removeClass(
          activeDropdownIcon
        );
        return;
      }
      lastScroll = currentScroll;
    });
  };
  scrollAwayClose();
};

const nav = () => {
  // Hamburger click handler
  $hamburger.on('click', () => {
    mobileNavHandler();
  });
  // Submenu functionality
  subMenuHandler();
  // Menu close functionalities
  menuCloseHandler();
};

export default nav;
