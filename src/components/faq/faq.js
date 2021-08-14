import { throttle as _throttle, debounce as _debounce } from 'lodash';
import gsap from 'gsap/gsap-core';
import './faq.css';

// Selectors
const $toggleButton = $('.faq__question-container'); // container with question and toggle icon - triggers the whole thing
const $toggleIcon = $('.faq__toggle-icon'); // toggle icon needs to rotate

// Classes
const activeToggleButton = 'faq__question-container--active';
const activeAnswer = 'faq__answer-container--active';
const activeToggleIcon = 'faq__toggle-icon--active';

const faq = () => {
  $toggleButton.on('click', function () {
    console.log('clicked');
    const $this = $(this);
    $this.toggleClass(activeToggleButton);
    $this.next().toggleClass(activeAnswer);
    // prettier-ignore
    if ($this.find($toggleIcon).hasClass(activeToggleIcon)) {
      $this.find($toggleIcon).removeClass(activeToggleIcon);
      gsap.fromTo($this.find($toggleIcon), { duration: 0.25, rotation: 90 }, { duration: 0.25, rotation: 0 });
    } else {
      $this.find($toggleIcon).addClass(activeToggleIcon);
      gsap.fromTo($this.find($toggleIcon), { duration: 0.25, rotation: 0 }, { duration: 0.25, rotation: 90 });
    }
  });
};

export default faq;
