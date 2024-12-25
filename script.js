'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ////////////////////////////////
// /////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
const allsections = document.querySelectorAll('.section');

// console.log(allsections);
document.getElementById('section--1');
const allbuttons = document.getElementsByTagName('button');
// console.log(allbuttons);

// console.log(document.getElementsByClassName('btn'));
// creating and inserting elements
// insertAdjacentHTML

// creating element  from javascript
const message = document.createElement('div');

message.classList.add('cookie-message');
// message.textContent =
//   'we use cookies for improved functionality and analytics.';

message.innerHTML =
  'we use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button> ';
header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);
// dlete.element
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message);
  });

// basic styling in javascript
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// changing colors from javascript that are defined in css root element
document.documentElement.style.setProperty('--color-primary', 'orangered');

// acessing standard atributes of elements from javascript
const logo = document.querySelector('.nav__logo');
console.log(logo);
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'beautiful minimalist logo';

// acessing non standard atributs
console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'B');

console.log(logo.getAttribute('src'));

const link = document.querySelector('.btn--show-modal');
console.log(link.href);
console.log(link.getAttribute('href'));

// data atribute
console.log(logo.dataset.versionNumber);

// classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');
// don't use
logo.closeName = 'jonas';

// life cycle dom events

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built', e);
});

window.addEventListener('load', function (e) {
  console.log('page fully loade', e);
});
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
