import StoreAddressLinks from './components/StoreAddressLinks/StoreAddressLinks';
import StoreTitles from './components/Stores/StoreTitles';

const StoresRelated = () => {
  StoreTitles();
  StoreAddressLinks();
};

const init = () => {
  StoresRelated();
};

$(function () {
  init();
});
