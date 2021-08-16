import '../modals.css';

// Selectors
// Global
const $body = $('body');
const $html = $('html');

// Modal
const $segmentationModal = $('.modal--shop'); // containing element
const $segmentationForm = $('.modal__form--shop');
const $storeSelect = $('#shop-segmentation-select');

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
let fullPath;
let main = false;
let store;
let products = false;
let destination;

// Functions
const pathConstructor = (main, store, products, destination) => {
  if (main) {
    // convert to switch-case?
    fullPath += `/${store}`;
  } else if (products) {
    fullPath = `${dutchieTopLevel}/${store}/${destination}`;
  } else if (!products) {
    fullPath = `${dutchieTopLevel}/${store}/products/${destination}`; // put products in a constant?
  }
  console.log(fullPath);
};

const shopSegmentation = () => {
  $heroShop.on('click', function () {
    // launch the modal – convert into it's own function
    $segmentationModal.addClass(activeSegmentation);
    $html.addClass(disableScroll);
    $body.addClass(disableScroll);
    // capture value of data attr – try the alternative to 'this' from the docs
    const dataVal = $(this).data('menu');
    // construct part of the url – turn this into it's own function and switch-case?
    if (dataVal === 'main') {
      fullPath = dutchieTopLevel;
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
    !fullPath ? console.log(destination) : console.log(fullPath); // remove
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
      fullPath = dutchieTopLevel;
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
    !fullPath ? console.log(destination) : console.log(fullPath); // remove
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
      fullPath = dutchieTopLevel;
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
    !fullPath ? console.log(destination) : console.log(fullPath); // remove
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
      fullPath = dutchieTopLevel;
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
    !fullPath ? console.log(destination) : console.log(fullPath);
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
      fullPath = dutchieTopLevel;
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
    !fullPath ? console.log(destination) : console.log(fullPath);
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
      fullPath = dutchieTopLevel;
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
    !fullPath ? console.log(destination) : console.log(fullPath);
  });
  $segmentationForm.on('submit', function (e) {
    e.preventDefault();
    // construct the path
    const storeSelect = $storeSelect.val();
    if (storeSelect === 'danforth') {
      // put 'danforth' in a constant?
      store = danforth;
      pathConstructor(store, destination, products, main);
    }
    // redirect to the URL
  });
};

export default shopSegmentation;

// Add 'Shop Now' mobile nav button to this mix
// Add click away from modal to close functionality
// Add esc to close functionality
// Disable the placeholder value and change it's color to 30% black
// How to launch without repainting/scrolling to the top of the page
// Collapse open menu if the modal is triggered
