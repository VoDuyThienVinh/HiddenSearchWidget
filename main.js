'use strict';

console.log('This is a log console');

const inputEl = document.getElementsByClassName('input');
const btnEl = document.querySelector('.btn');
const searchEl = document.querySelector('.search');



btnEl.addEventListener('click', () => {
  if(searchEl.classList.contains('active')) {
    searchEl.classList.remove('active');
  } else {
    searchEl.classList.add('active');
  }
})