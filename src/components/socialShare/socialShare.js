import tippy from 'tippy.js';
import './socialShare.css';
import 'tippy.js/animations/scale.css';

// Global
const $body = $('body');

// URL
const $currentPost = $(location).attr('href'); // for copying
const $currentPostEncoded = encodeURIComponent($(location).attr('href')); // for share links

// Share buttons
const $facebookShareBtn = $('.blog-post__share-link--facebook');
const $linkedInShareBtn = $('.blog-post__share-link--linkedin');
const $emailShareBtn = $('.blog-post__share-link--email');
const $copyShareBtn = $('.blog-post__share-link--copy');
const copyShareBtn = document.querySelector('.blog-post__share-link--copy');

// Share links
const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${$currentPostEncoded}`;
const linkedInShareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${$currentPostEncoded}&title=Canvas%20Cannabis&source=https%3A%2F%2Fcanvascannabis.ca%2F&summary=Short%20summary`; // make title, source and summary parameters dynamic
const emailShareLink = `mailto:?subject=test&body=${$currentPost}`; // gmail on ios is tricky with mailto in general + clean up body variable and subject

// Copy functionality
const $temp = $('<input>');

// Functions
const copyLink = () => {
  $copyShareBtn.on('click', () => {
    $body.append($temp);
    $temp.val($currentPost).select();
    document.execCommand('copy');
    $temp.remove();
    // Confirm link copy
  });
  tippy(copyShareBtn, {
    // cache the selector in with vanilla js
    theme: 'canvas',
    allowHTML: true,
    content:
      '<span class="share__link--content">Copied</spanc> <img src="https://uploads-ssl.webflow.com/60cfd1175523ac59337574a3/611590b5b841f0538ff7398a_share__link--copied.svg" class="share__link--copied">',
    trigger: 'click',
    placement: 'right',
    offset: [0, 8], // skidding, distance
    animation: 'scale',
    duration: 250,
    inertia: 'true',
    arrow: false,
    hideOnClick: false,
    onShow(instance) {
      setTimeout(() => {
        instance.hide();
      }, 1500);
    },
  });
};

const socialShare = () => {
  $facebookShareBtn.attr('href', facebookShareLink);
  $linkedInShareBtn.attr('href', linkedInShareLink);
  $emailShareBtn.attr('href', emailShareLink);
  copyLink();
};

export default socialShare;
