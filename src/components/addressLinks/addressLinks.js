// Selectors
const $storesPageAddress = $('.rich-text-body--stores-page-address p > a');
const $storePageAddress = $('.rich-text-body--store-page-address p > a');

const addressLinks = () => {
  $storesPageAddress.attr('rel', 'noopener noreferrer');
  $storePageAddress.attr('rel', 'noopener noreferrer');
};

export default addressLinks;
