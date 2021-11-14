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
  // Main site settings head
  ButtonsLoadingState();
  AgeGate();
  ShopSegmentation();
  CookiesConsent();
  Nav();
};

const HomePage = () => {
  // Home page only
  DailySpecials();
};

const StoresRelated = () => {
  // Stores collection pages and on the About page
  StoreTitles();
  // Stores collection pages and Individual Stores pages
  StoreAddressLinks();
};

const CustomerSupport = () => {
  // Customer support page only
  FrequentlyAskedQuestions();
};

const BlogPosts = () => {
  // Blog Posts only
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
