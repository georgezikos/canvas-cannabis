import ButtonsLoadingState from './components/Buttons/ButtonsLoadingState';
import AgeGate from './components/Modals/AgeGate/AgeGate';
import ShopSegmentation from './components/Modals/ShopSegmentation/ShopSegmentation';
import CookiesConsent from './components/Modals/CookiesConsent/CookiesConsent';
import Nav from './components/Nav/Nav';

const GlobalComponents = () => {
  ButtonsLoadingState();
  AgeGate();
  ShopSegmentation();
  CookiesConsent();
  Nav();
};

const init = () => {
  GlobalComponents();
};

$(function () {
  init();
});
