import '../modals.css';

// Selectors
// Global
const $body = $('body');
const $html = $('html');

// Modal
const $segmentationModal = $('.modal--shop'); // containing element
const $segmentationForm = $('.modal__form--shop');
const $storeSelect = $('#shop-segmentation-select');
const $selectPlaceholder = $('#shop-segmentation-select > option:first-child');

// Buttons
const $navShop = $('.main-nav__link--shop'); // nav 'shop' link
const $heroShop = $('#shop-now-btn'); // hero 'shop now'
const $dailySpecialsShop = $('#daily-specials-btn'); // daily specials/staff picks
const $shopFlower = $('#shop-flower-btn'); // shop flower
const $shopEdibles = $('#shop-edibles-btn'); // shop edibles
const $shopAccessories = $('#shop-accessories-btn'); // shop accessories

// Classes
const activeSegmentation = 'modal--active';
const disableScroll = 'active-modal';

// URL Parts
const dutchieTopLevel = 'https://dutchie.com/embedded-menu'; // top-level

// Stores
const danforth = 'canvas'; // danforth main
const liberty = 'canvas-liberty'; // liberty main
const mountDennis = 'canvas-weston'; // mount dennis main

// Destinations
const specials = 'specials'; // specials category
const flower = 'flower'; // flower category
const edibles = 'edibles'; // flower category
const accessories = 'accessories'; // flower category

// URL Variables
let main = false;
let store;
let products = false;
let destination;

// Functions
const pathConstructor = (main, store, products, destination) => {
  if (main) {
    // convert to switch-case?
    return `${dutchieTopLevel}/${store}`;
  } else if (!products) {
    return `${dutchieTopLevel}/${store}/${destination}`;
  } else if (products) {
    return `${dutchieTopLevel}/${store}/products/${destination}`; // put products in a constant?
  }
};

// See if I can make these functions more dynamic and import them between nav component and here
const closeModalHandler = () => {
  // ESC key to close menu
  const escClose = () => {
    $document.keyup((e) => {
      const escKey = 27;
      if (
        $segmentationModal.hasClass(activeSegmentation) &&
        e.keyCode === escKey
      ) {
        $segmentationModal.removeClass(activeSegmentation);
        $html.removeClass(disableScroll);
        $body.removeClass(disableScroll);
      }
    });
  };
  // Clicking away from nav to close open sub-menus
  const clickAwayClose = () => {
    $document.on('click', (e) => {
      let $target = $(e.target);
      if (
        $segmentationModal.hasClass(activeSegmentation) &&
        !$target.closest($segmentationModal).length
      ) {
        $segmentationModal.removeClass(activeSegmentation);
        $html.removeClass(disableScroll);
        $body.removeClass(disableScroll);
      } else {
        return;
      }
    });
  };
  escClose();
  clickAwayClose();
};

const shopSegmentation = () => {
  // Create a placeholder value in the select field
  // prettier-ignore
  $selectPlaceholder.attr({
    // prettier-ignore
    'selected': 'selected',
    // prettier-ignore
    'disabled': 'disabled',
  });
  $heroShop.on('click', function () {
    // launch the modal – convert into it's own function
    $segmentationModal.addClass(activeSegmentation);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
    // capture value of data attr – try the alternative to 'this' from the docs
    const dataVal = $(this).data('menu');
    // construct part of the url – turn this into it's own function and switch-case?
    if (dataVal === 'main') {
      main = true;
    } else if (dataVal === 'specials') {
      destination = specials;
    } else if (dataVal === 'flower') {
      products = true;
      destination = flower;
    } else if (dataVal === 'edibles') {
      products = true;
      destination = edibles;
    } else if (dataVal === 'accessories') {
      products = true;
      destination = accessories;
    }
    main ? console.log(dutchieTopLevel) : console.log(destination); // remove
  });
  $navShop.on('click', function () {
    // launch the modal – convert into it's own function
    $segmentationModal.addClass(activeSegmentation);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
    // capture value of data attr – try the alternative to 'this' from the docs
    const dataVal = $(this).data('menu');
    // construct part of the url – turn this into it's own function and switch-case?
    if (dataVal === 'main') {
      main = true;
    } else if (dataVal === 'specials') {
      destination = specials;
    } else if (dataVal === 'flower') {
      destination = flower;
    } else if (dataVal === 'edibles') {
      destination = edibles;
    } else if (dataVal === 'accessories') {
      destination = accessories;
    }
    main ? console.log(dutchieTopLevel) : console.log(destination); // remove
  });
  $dailySpecialsShop.on('click', function () {
    // launch the modal – convert into it's own function
    $segmentationModal.addClass(activeSegmentation);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
    // capture value of data attr – try the alternative to 'this' from the docs
    const dataVal = $(this).data('menu');
    // construct part of the url – turn this into it's own function and switch-case?
    if (dataVal === 'main') {
      main = true;
    } else if (dataVal === 'specials') {
      destination = specials;
    } else if (dataVal === 'flower') {
      destination = flower;
    } else if (dataVal === 'edibles') {
      destination = edibles;
    } else if (dataVal === 'accessories') {
      destination = accessories;
    }
    main ? console.log(dutchieTopLevel) : console.log(destination); // remove
  });
  $shopFlower.on('click', function () {
    // launch the modal
    $segmentationModal.addClass(activeSegmentation);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
    // capture value of data attr
    const dataVal = $(this).data('menu');
    // construct part of the url
    if (dataVal === 'main') {
      main = true;
    } else if (dataVal === 'specials') {
      destination = specials;
    } else if (dataVal === 'flower') {
      destination = flower;
      products = true;
    } else if (dataVal === 'edibles') {
      destination = edibles;
      products = true;
    } else if (dataVal === 'accessories') {
      destination = accessories;
      products = true;
    }
    main ? console.log(dutchieTopLevel) : console.log(destination); // remove
  });
  $shopEdibles.on('click', function () {
    // launch the modal
    $segmentationModal.addClass(activeSegmentation);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
    // capture value of data attr
    const dataVal = $(this).data('menu');
    // construct part of the url
    if (dataVal === 'main') {
      main = true;
    } else if (dataVal === 'specials') {
      destination = specials;
    } else if (dataVal === 'flower') {
      destination = flower;
      products = true;
    } else if (dataVal === 'edibles') {
      destination = edibles;
      products = true;
    } else if (dataVal === 'accessories') {
      destination = accessories;
      products = true;
    }
    main ? console.log(dutchieTopLevel) : console.log(destination); // remove
  });
  $shopAccessories.on('click', function () {
    // launch the modal
    $segmentationModal.addClass(activeSegmentation);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
    // capture value of data attr
    const dataVal = $(this).data('menu');
    // construct part of the url
    if (dataVal === 'main') {
      main = true;
    } else if (dataVal === 'specials') {
      destination = specials;
    } else if (dataVal === 'flower') {
      destination = flower;
      products = true;
    } else if (dataVal === 'edibles') {
      destination = edibles;
      products = true;
    } else if (dataVal === 'accessories') {
      destination = accessories;
      products = true;
    }
    main ? console.log(dutchieTopLevel) : console.log(destination); // remove
  });
  $segmentationForm.on('submit', function (e) {
    e.preventDefault();
    // construct the path
    const $selectedStore = $storeSelect.val();
    // move this into it's own function?
    if ($selectedStore === 'danforth') {
      // put these store strings in constants?
      store = danforth;
      const fullPath = pathConstructor(main, store, products, destination);
      window.open(fullPath);
      // reset URL variables
      main = false;
      store = undefined;
      products = false;
      destination = undefined;
      $storeSelect.prop('selectedIndex', 0); // resets the select field
      // destroy the modal – convert into it's own function
      $segmentationModal.removeClass(activeSegmentation);
      $html.removeClass(disableScroll);
      $body.removeClass(disableScroll);
    } else if ($selectedStore === 'liberty') {
      store = liberty;
      const fullPath = pathConstructor(main, store, products, destination);
      window.open(fullPath);
      // reset URL variables
      main = false;
      store = undefined;
      products = false;
      destination = undefined;
      $storeSelect.prop('selectedIndex', 0); // resets the select field
      // destroy the modal – convert into it's own function
      $segmentationModal.removeClass(activeSegmentation);
      $html.removeClass(disableScroll);
      $body.removeClass(disableScroll);
    } else if ($selectedStore === 'mount-dennis') {
      store = mountDennis;
      const fullPath = pathConstructor(main, store, products, destination);
      window.open(fullPath);
      // reset URL variables
      main = false;
      store = undefined;
      products = false;
      destination = undefined;
      $storeSelect.prop('selectedIndex', 0); // resets the select field
      // destroy the modal – convert into it's own function
      $segmentationModal.removeClass(activeSegmentation);
      $html.removeClass(disableScroll);
      $body.removeClass(disableScroll);
    }
  });
  closeModalHandler();
};

export default shopSegmentation;

// Add 'Shop Now' mobile nav button to this mix + footer 'shop' link
// Add click away from modal to close functionality
// Add esc to close functionality
// Collapse open menu if the modal is triggered
