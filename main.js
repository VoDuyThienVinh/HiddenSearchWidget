'use strict';

console.log('This is a log console');

const inputEl = document.getElementsByClassName('input');
const btnEl = document.getElementsByClassName('btn');
const searchEl = document.querySelector('.search');

const testEl = document.querySelector("body [type='text']")

console.log(testEl);

// btnEl[0].addEventListener('click', () => {
//   if(searchEl.classList.contains('active')) {
//     searchEl.classList.remove('active');
//   } else {
//     searchEl.classList.add('active');
//   }
// })

// btnEl[0].addEventListener('click', () => {
//   let containClass = searchEl.getAttribute('class');
//   if(containClass == 'search') {
//     searchEl.setAttribute('class', 'search active')
//   } else {
//     searchEl.setAttribute('class', 'search')
//   }
//   console.log(searchEl.getAttribute('class'));
// })

// btnEl[0].addEventListener('click', () => {
//   if(searchEl.className == 'search') {
//     searchEl.className = 'search active'
//   } else {
//     searchEl.className = 'search'
//   }
// })



// const testClass = Array.from(document.querySelectorAll('[data-title]'));
// for(testClass)
// testClass.forEach