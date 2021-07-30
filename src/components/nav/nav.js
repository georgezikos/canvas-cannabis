import './nav.css';
import 'velocity-animate';
// import Headroom from 'headroom.js';

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

const mainNav = document.querySelector('nav.main-nav');

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
    // All of these implementations with this direct selector work, but not if the selector is cached – get to the bottom of why this is the case
    $('.main-nav__dropdown-icon--active')
      .removeClass(activeDropdownIcon)
      .velocity(
        {
          transform: ['rotateZ(-360deg)', 'rotateZ(-180deg)'],
        },
        {
          duration: 200,
          easing: 'ease-out',
        }
      );
  }
};

const subMenuHandler = () => {
  $dropdownLink.on('click', function () {
    // prettier-ignore
    const $openSubMenus = $(this).parent().siblings($linkListContainer); // Other open submenus
    if ($openSubMenus.find($dropdownSubMenu).hasClass(activeSubMenu)) {
      // Collapse other submenus that are open -- rethink if this is too rigid in terms of UX
      $openSubMenus.find($dropdownSubMenu).removeClass(activeSubMenu);
      // prettier-ignore
      $openSubMenus.find($dropdownSubMenu).prev($dropdownLink).find($dropdownIcon).removeClass(activeDropdownIcon).velocity({
        transform: ['rotateZ(-360deg)', 'rotateZ(-180deg)'],
      }, {
        duration: 200,
        easing: 'ease-out',
      });
    }
    $(this).next().toggleClass(activeSubMenu);
    // prettier-ignore
    if ($(this).find($dropdownIcon).hasClass(activeDropdownIcon)) {
      $(this).find($dropdownIcon).removeClass(activeDropdownIcon).velocity({
        transform: ['rotateZ(-360deg)', 'rotateZ(-180deg)'],
      }, {
        duration: 200,
        easing: 'ease-out',
      });
    } else {
      $(this).find($dropdownIcon).addClass(activeDropdownIcon).velocity({
        transform: ['rotateZ(-180deg)', 'rotateZ(0deg)'],
      }, {
        duration: 200,
        easing: 'ease-out',
      });
    }
  });
};

const menuCloseHandler = () => {
  // Esc key to close menu
  $document.keyup((e) => {
    if ($linksList.hasClass(activeMobileNav) && e.keyCode === 27) {
      navHandler();
    } else if ($dropdownSubMenu.hasClass(activeSubMenu) && e.keyCode === 27) {
      $dropdownSubMenu.removeClass(activeSubMenu);
      $('.main-nav__dropdown-icon--active')
        .removeClass(activeDropdownIcon)
        .velocity(
          {
            transform: ['rotateZ(-360deg)', 'rotateZ(-180deg)'],
          },
          {
            duration: 200,
            easing: 'ease-out',
          }
        );
    }
  });
  // Window resize handler
  $window.on('resize', () => {
    if (
      $linksList.hasClass(activeMobileNav) &&
      $window.width() > windowNavClose
    ) {
      navHandler();
    } else if (
      $dropdownSubMenu.hasClass(activeSubMenu) &&
      $window.width() <= windowNavClose // and not an orientation change, currently collapses submenus on orientation change
    ) {
      $dropdownSubMenu.removeClass(activeSubMenu);
      $('.main-nav__dropdown-icon--active')
        .removeClass(activeDropdownIcon)
        .velocity(
          {
            transform: ['rotateZ(-360deg)', 'rotateZ(-180deg)'],
          },
          {
            duration: 200,
            easing: 'ease-out',
          }
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
      $('.main-nav__dropdown-icon--active')
        .removeClass(activeDropdownIcon)
        .velocity(
          {
            transform: ['rotateZ(-360deg)', 'rotateZ(-180deg)'],
          },
          {
            duration: 200,
            easing: 'ease-out',
          }
        );
      console.log('Clicked away');
    } else {
      return;
    }
  });
  // Scroll handler
  // $window.on('scroll', function () {
  //   if ($dropdownSubMenu.hasClass(activeSubMenu)) {
  //     $dropdownSubMenu.removeClass(activeSubMenu);
  //     $('.main-nav__dropdown-icon--active')
  //       .removeClass(activeDropdownIcon)
  //       .velocity(
  //         {
  //           transform: ['rotateZ(-360deg)', 'rotateZ(-180deg)'],
  //         },
  //         {
  //           duration: 200,
  //           easing: 'ease-out',
  //         }
  //       );
  //   }
  // });
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
        $('.main-nav__dropdown-icon--active')
          .removeClass(activeDropdownIcon)
          .velocity(
            {
              transform: ['rotateZ(-360deg)', 'rotateZ(-180deg)'],
            },
            {
              duration: 200,
              easing: 'ease-out',
            }
          );
        return;
      } else if (
        currentScroll < lastScroll &&
        $dropdownSubMenu.hasClass(activeSubMenu) &&
        currentScroll === 0
      ) {
        $dropdownSubMenu.removeClass(activeSubMenu);
        $('.main-nav__dropdown-icon--active')
          .removeClass(activeDropdownIcon)
          .velocity(
            {
              transform: ['rotateZ(-360deg)', 'rotateZ(-180deg)'],
            },
            {
              duration: 200,
              easing: 'ease-out',
            }
          );
        return;
      }
      lastScroll = currentScroll;
    });
  };
  scrollAwayClose();
};

// const setLinksHeight = () => {
//   $linksList.height(`${$window.innerHeight()}px`);
// };
// $window.on('resize', setLinksHeight);

// const stickyHideReveal = () => {
//   let headroom = new Headroom(mainNav);
//   headroom.init();
//   setLinksHeight();
// };

const nav = () => {
  // Hamburger click handler
  $hamburger.on('click', () => {
    navHandler();
  });
  // Submenu functionality
  subMenuHandler();
  // Menu close functionalities
  menuCloseHandler();
  // Show & Hide Menu on Scroll
  // stickyHideReveal();
};

export default nav;
