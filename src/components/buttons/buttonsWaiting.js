import './buttonsWaiting.css';

// target all input types of submit
const $submitBtns = $('input[type="submit"]');
// on form submit animate inside the button

const buttonsWaiting = () => {
  $submitBtns.replaceWith(`<button></button>`);
};

export default buttonsWaiting;
