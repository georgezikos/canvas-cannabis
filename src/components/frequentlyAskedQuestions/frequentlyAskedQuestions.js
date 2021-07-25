import './frequentlyAskedQuestions.css';
import 'velocity-animate';

// Selectors
const $toggleButton = $('.customer-support__faq-question-container'); // container with question and toggle icon - triggers the whole thing
const $toggleIcon = $('.customer-support__faq-toggle-icon'); // toggle icon needs to rotate

// Classes
const activeToggleButton = 'customer-support__faq-question-container--active';
const activeAnswer = 'customer-support__faq-answer-container--active';
const activeToggleIcon = 'customer-support__faq-toggle-icon--active';

const questionAnswerToggle = () => {
  $toggleButton.on('click', function (e) {
    e.stopPropagation();
    const $this = $(this);
    $this.toggleClass(activeToggleButton);
    $this.next().toggleClass(activeAnswer);
    // prettier-ignore
    if ($this.find($toggleIcon).hasClass(activeToggleIcon)) {
      $this.find($toggleIcon).removeClass(activeToggleIcon).velocity({
        transform: ['rotateZ(0deg)', 'rotateZ(90deg)']
      }, {
        duration: 200,
        easing: 'ease-out',
      });
    } else {
      $this.find($toggleIcon).addClass(activeToggleIcon).velocity({
        transform: ['rotateZ(90deg)', 'rotateZ(0deg)']
      }, {
        duration: 200,
        easing: 'ease-out',
      });
    }
  });
};

export default questionAnswerToggle;
