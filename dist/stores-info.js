/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/StoreAddressLinks/StoreAddressLinks.js
// Selectors
var $storesPageAddress = $('.rich-text-body--stores-page-address p > a');
var $storePageAddress = $('.rich-text-body--store-page-address p > a');

var StoreAddressLinks = function StoreAddressLinks() {
  $storesPageAddress.attr('rel', 'noopener noreferrer');
  $storePageAddress.attr('rel', 'noopener noreferrer');
};

/* harmony default export */ const StoreAddressLinks_StoreAddressLinks = (StoreAddressLinks);
;// CONCATENATED MODULE: ./src/components/Stores/StoreTitles.js
var $cityStoreTitleEl = $('h2.store-locations__heading');
var $allStoreTitleEl = $('h3.store-locations__heading:not(.stores-location__heading--sub)');
var $aboutStoreTitleEl = $('h3.about__stores-heading');

var StoreTitles = function StoreTitles() {
  var titleFormatter = function titleFormatter(el) {
    for (var i = 0; i < el.length; i++) {
      var storeTitleSplit = el[i].innerText.split(' ');
      var lastWord = storeTitleSplit.pop();
      var firstHalf = storeTitleSplit.join(' ');
      var newTitle = el === $cityStoreTitleEl ? "<h2 class=\"store-locations__heading\">".concat(firstHalf, " <span class=\"line-break\">").concat(lastWord, "</span></h2>") : el === $aboutStoreTitleEl ? "<h3 class=\"about__stores-heading\">".concat(firstHalf, " <span class=\"line-break\">").concat(lastWord, "</span></h3>") : "<h3 class=\"store-locations__heading\">".concat(firstHalf, " <span class=\"line-break\">").concat(lastWord, "</span></h3>");
      el[i].outerHTML = newTitle;
    }
  };

  titleFormatter($cityStoreTitleEl);
  titleFormatter($allStoreTitleEl);
  titleFormatter($aboutStoreTitleEl);
};

/* harmony default export */ const Stores_StoreTitles = (StoreTitles);
;// CONCATENATED MODULE: ./src/stores-info.js

 // Imported into the Stores, Individual Stores and About pages head

var StoresRelated = function StoresRelated() {
  Stores_StoreTitles();
  StoreAddressLinks_StoreAddressLinks();
};

var init = function init() {
  StoresRelated();
};

$(function () {
  init();
});
/******/ })()
;