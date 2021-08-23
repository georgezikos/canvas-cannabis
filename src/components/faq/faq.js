// import { throttle as _throttle, debounce as _debounce } from 'lodash'; // bring these dependencies back in when I learn how to bind properly
import gsap from 'gsap/gsap-core';
import './faq.css';

// Selectors
const $faqQuestionsParent = $('.faq__questions'); // houses all of the toggle buttons
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
    // $this.attr('tabindex', '-1');
    $this.attr('aria-selected', 'true');
    // $otherTabs.find($toggleButton).attr('tabindex', '0');
    $otherTabs.find($toggleButton).attr('aria-selected', 'false');
    $this.toggleClass(activeToggleButton);
    // aria handling
    // if ($otherTabs.find($toggleButton).hasClass(activeToggleButton)) {
    //   $otherTabs.find($toggleButton).attr('aria-selected', 'false');
    // }
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
  $faqQuestionsParent.on('keydown', function (e) {
    const moveRight = 39;
    const moveLeft = 37;
    // Enter only if left or right keys
    if (e.keyCode === moveRight || e.keyCode === moveLeft) {
      console.log('LEFT OR RIGHT MY GUY');
      // tabs[tabFocus].setAttribute("tabindex", -1);
      // if (e.keyCode === 39) {
      //   tabFocus++;
      //   // If we're at the end, go to the start
      //   if (tabFocus >= tabs.length) {
      //     tabFocus = 0;
      //   }
      //   // Move left
      // } else if (e.keyCode === 37) {
      //   tabFocus--;
      //   // If we're at the start, move to the end
      //   if (tabFocus < 0) {
      //     tabFocus = tabs.length - 1;
      //   }
      // }

      // tabs[tabFocus].setAttribute("tabindex", 0);
      // tabs[tabFocus].focus();
    }
  });
};

export default faq;
