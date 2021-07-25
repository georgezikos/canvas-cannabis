import './frequentlyAskedQuestions.css';
import 'velocity-animate';

// Selectors
const $window = $(window);
const $document = $(document);
const $body = $('body');
const $html = $('html');

const $toggleButton = $('.customer-support__faq-question-container'); // container with question and toggle icon - triggers the whole thing
const $answer = $('.customer-support__faq-answer-container'); // answer, original state is display none, needs to go to block
const $toggleIcon = $('.customer-support__faq-toggle-icon'); // toggle icon needs to rotate

// Classes
const activeToggleButton = 'customer-support__faq-question-container--active';
const activeAnswer = 'customer-support__faq-answer-container--active';
const activeToggleIcon = 'customer-support__faq-toggle-icon--active';

const questionAnswerToggle = () => {
  $toggleButton.on('click', function (e) {
    e.stopPropagation();
    const $this = $(this);

    const $openQuestions = $this.parent().siblings().find($toggleButton);

    if ($openQuestions.hasClass(activeToggleButton)) {
      $openQuestions.removeClass(activeToggleButton);
      $openQuestions.find($toggleIcon).removeClass(activeToggleIcon);
    }

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
      });;
    }
  });
};

export default questionAnswerToggle;
