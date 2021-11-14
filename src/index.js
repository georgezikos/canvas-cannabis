import ButtonsLoadingState from './components/Buttons/ButtonsLoadingState';
import AgeGate from './components/Modals/AgeGate/AgeGate';
import ShopSegmentation from './components/Modals/ShopSegmentation/ShopSegmentation';
import CookiesConsent from './components/Modals/CookiesConsent/CookiesConsent';
import Nav from './components/Nav/Nav';
import DailySpecials from './components/DailySpecials/DailySpecials';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import SocialShare from './components/SocialShare/SocialShare';
import StoreAddressLinks from './components/StoreAddressLinks/StoreAddressLinks';
import StoreTitles from './components/Stores/StoreTitles';

const GlobalComponents = () => {
  ButtonsLoadingState();
  AgeGate();
  ShopSegmentation();
  CookiesConsent();
  Nav();
};

const HomePage = () => {
  DailySpecials();
};

const StoresRelated = () => {
  StoreTitles();
  StoreAddressLinks();
};

const CustomerSupport = () => {
  FrequentlyAskedQuestions();
};

const BlogPosts = () => {
  SocialShare();
};

const init = () => {
  GlobalComponents();
  HomePage();
  StoresRelated();
  CustomerSupport();
  BlogPosts();
};

$(function () {
  init();
});
