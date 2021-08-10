import { gsap } from 'gsap'; // remove?
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

// Unused
const $hamburgerTop = $('div.hamburger__top'); // Top bun
const $hamburgerBottom = $('div.hamburger__bottom'); // Bottom bun
// Unused

// Links
const $linksList = $('.main-nav__links-list'); // Containing element
const $dropdownParent = $('.main-nav__links-item--dropdown'); // Links with dropdown navigation modifier
const $dropdownChildren = $('.links-item__container'); // Link and chevron container
const $dropdownIcon = $('.main-nav__dropdown-icon-bounding'); // Dropdown chevron icon
const $activeDropdownIcon = $('.main-nav__dropdown-icon-bounding--active'); // Active dropdown chevron icons
const $dropdownSubMenu = $('.main-nav__sub-menu'); // Containing element of sub-menu link lists

// Classes
const disableScroll = 'active-nav';
const activeMobileNav = 'main-nav__links-list--active';

// Unused
const mainNavActiveMobile = 'main-nav--active-mobile';
const navLogoActiveMobile = 'main-nav__logo--active-mobile';
const mainNavDark = 'main-nav--dark';
const hamburgerBunsActiveMobile = 'hamburger--active-mobile';
// Unused

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
    const $this = $(this);
    // Checking for any open sub-menus
    // prettier-ignore
    const $openSubMenus = $this.parent().siblings($dropdownParent); // Siblings that also have sub-menu functionality
    if ($openSubMenus.find($dropdownSubMenu).hasClass(activeSubMenu)) {
      // If there are other open sub-menus, collapse them
      $openSubMenus.find($dropdownSubMenu).removeClass(activeSubMenu);
      // prettier-ignore
      $openSubMenus.find($dropdownSubMenu).prev($dropdownChildren).find($dropdownIcon).removeClass(activeDropdownIcon);
      // prettier-ignore
      gsap.set($openSubMenus.find($dropdownSubMenu).prev($dropdownChildren).find($dropdownIcon), { transformOrigin: 'center' });
      // prettier-ignore
      gsap.fromTo($openSubMenus.find($dropdownSubMenu).prev($dropdownChildren).find($dropdownIcon), { duration: 0.25, rotation: 180}, { duration: 0.25, rotation: 360});
    }

    $this.next().toggleClass(activeSubMenu); // Open the sub-menu corresponding with the clicked link
    // Deals with changes that happen when you click the same link to close its sub-menu
    // prettier-ignore
    if ($this.find($dropdownIcon).hasClass(activeDropdownIcon)) {
      $this.find($dropdownIcon).removeClass(activeDropdownIcon);
      gsap.set($this.find($dropdownIcon), { transformOrigin: 'center' });
      gsap.fromTo($this.find($dropdownIcon), { duration: 0.25, rotation: 180, color: 'black'}, { duration: 0.25, rotation: 360, color: '#f2efed'});
      gsap.to('.main-nav__outer', { duration: 0.25, backgroundColor: 'transparent' });
    } else {
      $this.find($dropdownIcon).addClass(activeDropdownIcon);
      gsap.set($this.find($dropdownIcon), { transformOrigin: 'center' });
      gsap.fromTo($this.find($dropdownIcon), { duration: 0.25, rotation: 0}, { duration: 0.25, rotation: 180});
      gsap.to('.main-nav__outer', { duration: 0.25, backgroundColor: '#f2efed' });
      gsap.fromTo($this.find($dropdownIcon), { duration: 0.25, rotation: 0, color: '#f2efed'}, { duration: 0.25, rotation: 180, color: 'black'});
      // gsap.to('.logo', { duration: 0.25, color: 'black' });
      // gsap.to('.links', { duration: 0.25, color: 'black' });
    }
  });
};

const closeMenuHandler = () => {
  // ESC key to close menu
  const escClose = () => {
    $document.keyup((e) => {
      const escKey = 27;
      if ($linksList.hasClass(activeMobileNav) && e.keyCode === escKey) {
        mobileNavHandler();
      } else if (
        $dropdownSubMenu.hasClass(activeSubMenu) &&
        e.keyCode === escKey
      ) {
        $dropdownSubMenu.removeClass(activeSubMenu);
        $activeDropdownIcon.removeClass(activeDropdownIcon);
      }
    });
  };

  // Window resize to close menu
  const windowResizeClose = () => {
    $window.on('resize', () => {
      if (
        $linksList.hasClass(activeMobileNav) &&
        $window.width() > windowNavClose
      ) {
        mobileNavHandler();
      } else if (
        $dropdownSubMenu.hasClass(activeSubMenu) &&
        $window.width() <= windowNavClose // Also collapses an open menu on orientation change
      ) {
        $dropdownSubMenu.removeClass(activeSubMenu);
        $activeDropdownIcon.removeClass(activeDropdownIcon);
      }
    });
  };

  // Clicking away from nav to close open sub-menus
  const clickAwayClose = () => {
    $document.on('click', (e) => {
      let $target = $(e.target);
      if (
        $window.width() > windowNavClose &&
        $dropdownSubMenu.hasClass(activeSubMenu) &&
        !$target.closest($mainNav).length
      ) {
        $dropdownSubMenu.removeClass(activeSubMenu);
        $activeDropdownIcon.removeClass(activeDropdownIcon);
      } else {
        return;
      }
    });
  };

  // Scroll away to close open sub-menus
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
        // Scrolling down
        //prettier-ignore
        $dropdownSubMenu.removeClass(activeSubMenu);
        $activeDropdownIcon.removeClass(activeDropdownIcon);
        return;
      } else if (
        currentScroll < lastScroll &&
        $dropdownSubMenu.hasClass(activeSubMenu) &&
        currentScroll === 0
      ) {
        $dropdownSubMenu.removeClass(activeSubMenu);
        $activeDropdownIcon.removeClass(activeDropdownIcon);
        return;
      }
      lastScroll = currentScroll;
    });
  };
  escClose();
  windowResizeClose();
  clickAwayClose();
  escClose();
  windowResizeClose();
  clickAwayClose();
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
  closeMenuHandler();
};

export default nav;
