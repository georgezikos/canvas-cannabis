import './faq.css';

// Selectors
const $toggleButton = $('.faq__question-container'); // container with question and toggle icon - triggers the whole thing
const $toggleIcon = $('.faq__toggle-icon'); // toggle icon needs to rotate

// Classes
const activeToggleButton = 'faq__question-container--active';
const activeAnswer = 'faq__answer-container--active';
const activeToggleIcon = 'faq__toggle-icon--active';

const faq = () => {
  $toggleButton.on('click', function (e) {
    e.stopPropagation();
    const $this = $(this);
    $this.toggleClass(activeToggleButton);
    $this.next().toggleClass(activeAnswer);
    // prettier-ignore
    if ($this.find($toggleIcon).hasClass(activeToggleIcon)) {
      $this.find($toggleIcon).removeClass(activeToggleIcon);
    } else {
      $this.find($toggleIcon).addClass(activeToggleIcon);
    }
  });
};

export default faq;
