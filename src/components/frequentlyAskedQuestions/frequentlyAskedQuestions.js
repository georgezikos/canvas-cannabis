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
  $toggleButton.on('click', function () {
    const $this = $(this);
    $this.toggleClass(activeToggleButton);

    const $openQuestions = $(this).parent().siblings(); // Other open questions

    // if ($openSubMenus.find($dropdownSubMenu).hasClass(activeSubMenu)) {
    //   // Collapse other submenus that are open
    //   $openSubMenus.find($dropdownSubMenu).removeClass(activeSubMenu);
    //   // prettier-ignore
    //   $openSubMenus.find($dropdownSubMenu).prev($dropdownLink).find($dropdownIcon).removeClass(activeDropdownIcon).velocity({
    //     transform: ['rotateZ(-360deg)', 'rotateZ(-180deg)'],
    //   }, {
    //     duration: 200,
    //     easing: 'ease-out',
    //   });
    // }
    // $(this).next().toggleClass(activeSubMenu);
    // // prettier-ignore
    // if ($(this).find($dropdownIcon).hasClass(activeDropdownIcon)) {
    //   $(this).find($dropdownIcon).removeClass(activeDropdownIcon).velocity({
    //     transform: ['rotateZ(-360deg)', 'rotateZ(-180deg)'],
    //   }, {
    //     duration: 200,
    //     easing: 'ease-out',
    //   });
    // } else {
    //   $(this).find($dropdownIcon).addClass(activeDropdownIcon).velocity({
    //     transform: ['rotateZ(-180deg)', 'rotateZ(0deg)'],
    //   }, {
    //     duration: 200,
    //     easing: 'ease-out',
    //   });
    // }
  });
};

export default questionAnswerToggle;
