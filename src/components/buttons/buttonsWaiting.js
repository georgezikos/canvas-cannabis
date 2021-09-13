import './buttonsWaiting.css';

// Button Selectors
let $footerSubmit = $('#newsletter-subscribe'); // footer opt-in
const $footerOptInForm = $('#newsletter-optin-form'); // footer opt-in form

// const $ageGateSubmit // #confirm-age
// const $segmentationSubmit // #go-to-menu
// const $jobApplicationSubmit // .main-button.main-button--fixed.is--job-application

// Classes
const btnLoading = 'main-button--waiting';
const btnSuccess = 'main-button--success';

// Replacement HTML
const footerSubmitReplacement = `
  <button class="main-button main-button--fixed is--submit" id="newsletter-subscribe">
    <span class="main-button__text">Subscribe</span>
  </button>
`;
// const ageGateSubmitReplacement
// const segmentationSubmitReplacement
// const jobApplicationSubmitReplacement

// on form submit animate inside the button
const buttonsWaiting = () => {
  $footerSubmit.replaceWith(footerSubmitReplacement);
  $footerSubmit = $('#newsletter-subscribe');
  $footerOptInForm.submit(function () {
    $footerSubmit.toggleClass(btnLoading);
    const $this = $(this);
    $.ajax({
      data: $this.serialize(),
      success: function (data) {
        console.log('success');
        $footerSubmit.toggleClass(btnLoading);
        $footerSubmit.toggleClass(btnSuccess);
        $this[0].reset();
        $footerSubmit.toggleClass(btnSuccess);
      },
      error: function (data) {
        console.log('error');
        $footerSubmit.toggleClass(btnLoading);
      },
    });
  });
};

export default buttonsWaiting;
