import '../modals.css';

// Selectors
const $body = $('body');
const $html = $('html');
const $segmentationModal = $('.modal--shop'); // containing element
const $segmentationForm = $('.modal__form--shop');
const $chooseStore = $('#shop-segmentation-select');

// Classes
const activeSegmentation = 'modal--active';
const disableScroll = 'active-modal';

// Functions

// engaging modal, dealing with underlying elements
$segmentationModal.addClass(activeSegmentation);
$html.addClass(disableScroll);
$body.addClass(disableScroll);

const shopSegmentation = () => {};

export default shopSegmentation;
