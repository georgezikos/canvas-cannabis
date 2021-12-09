const $applyNow = $('#apply-now');
const $currentPosting = $(location).attr('href');
const appendVal = '#application';

const ApplyNow = () => {
  $applyNow.attr('href', `${$currentPosting}${appendVal}`);
};

export default ApplyNow;
