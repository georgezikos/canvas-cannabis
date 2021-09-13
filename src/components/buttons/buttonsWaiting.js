import './buttonsWaiting.css';

// Button Selectors
const $footerSubmit = $('#newsletter-subscribe'); // #newsletter-subscribe
// const $ageGateSubmit // #confirm-age
// const $segmentationSubmit // #go-to-menu
// const $jobApplicationSubmit // .main-button.main-button--fixed.is--job-application

// Classes
const loading = 'main-button--waiting';

// Replacement HTML
const footerSubmitReplacement = `
  <button class="main-button main-button--fixed is--submit ${loading}" id="newsletter-subscribe">
    <span class="main-button__text">Subscribe</span>
  </button>
`;
// const ageGateSubmitReplacement
// const segmentationSubmitReplacement
// const jobApplicationSubmitReplacement

// on form submit animate inside the button
const buttonsWaiting = () => {
  $footerSubmit.replaceWith(footerSubmitReplacement);
};

export default buttonsWaiting;
