import ApplyNow from './components/JobPostings/ApplyNow';

// Imported into job postings' head

const JobPostings = () => {
  ApplyNow();
};

const init = () => {
  JobPostings();
};

$(function () {
  init();
});
