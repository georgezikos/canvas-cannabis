// import { throttle as _throttle, debounce as _debounce } from 'lodash'; // bring these dependencies back in when I learn how to bind properly
import gsap from 'gsap/gsap-core';
import './faq.css';

// Selectors
const $toggleButton = $('.faq__question-container'); // container with question and toggle icon - triggers the whole thing
const $toggleIcon = $('.faq__toggle-icon'); // toggle icon needs to rotate
const $questionAnswer = $('.faq__question-answer'); // question and answer parent

// Classes
const activeToggleButton = 'faq__question-container--active';
const activeAnswer = 'faq__answer-container--active';
const activeToggleIcon = 'faq__toggle-icon--active';

const faq = () => {
  // Click handling
  $toggleButton.on('click', function () {
    // console.log('clicked'); // temporary, while learning how to debounce/throttle properly
    const $this = $(this);
    const $otherTabs = $this.parent().siblings($questionAnswer);
    $this.attr('tabindex', '-1');
    $otherTabs.find($toggleButton).attr('tabindex', '0');
    $this.toggleClass(activeToggleButton);
    // aria handling
    if ($this.hasClass(activeToggleButton)) {
      $this.attr('aria-selected', 'true');
      if ($otherTabs.find($toggleButton).hasClass(activeToggleButton)) {
        $otherTabs.find($toggleButton).attr('aria-selected', 'false');
      }
    } else {
      $this.attr('aria-selected', 'false');
    }
    $this.next().toggleClass(activeAnswer);
    // aria handling
    if ($this.next().hasClass(activeAnswer)) {
      $this.next().removeAttr('hidden');
    } else if (!$this.next().hasClass(activeAnswer)) {
      $this.next().prop('hidden', true);
    }
    // prettier-ignore
    if ($this.find($toggleIcon).hasClass(activeToggleIcon)) {
      $this.find($toggleIcon).removeClass(activeToggleIcon);
      gsap.fromTo($this.find($toggleIcon), { duration: 0.25, rotation: 90 }, { duration: 0.25, rotation: 0 });
    } else {
      $this.find($toggleIcon).addClass(activeToggleIcon);
      gsap.fromTo($this.find($toggleIcon), { duration: 0.25, rotation: 0 }, { duration: 0.25, rotation: 90 });
    }
  });
  // Arrow handling
};

export default faq;
