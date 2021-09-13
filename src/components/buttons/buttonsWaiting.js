import './buttonsWaiting.css';

// Button Selectors
let $footerSubmit = $('#newsletter-subscribe'); // footer opt-in
const $footerOptInForm = $('#newsletter-optin-form'); // footer opt-in form
export const $segmentationSubmit = $('#go-to-menu'); // #go-to-menu

// const $jobApplicationSubmit // .main-button.main-button--fixed.is--job-application

// Classes
export const btnLoading = 'main-button--waiting';
const btnSuccess = 'main-button--success';

// Replacement HTML
const footerSubmitReplacement = `
  <button class="main-button main-button--fixed is--submit" id="newsletter-subscribe">
    <span class="main-button__text">Subscribe</span>
  </button>
  `;

const segmentationSubmitReplacement = `
  <button class="main-button main-button--fixed main-button--modal is--submit" id="go-to-menu">
    <span class="main-button__text">Go to Menu</span>
  </button>
`;
// const jobApplicationSubmitReplacement

// on form submit animate inside the button
const buttonsWaiting = () => {
  // Footer
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
        setTimeout(function () {
          $footerSubmit.toggleClass(btnSuccess);
        }, 1000);
      },
      error: function (data) {
        console.log('error');
        $footerSubmit.toggleClass(btnLoading);
      },
    });
  });

  // Segmentation
  $segmentationSubmit.replaceWith(segmentationSubmitReplacement);
};

export default buttonsWaiting;
