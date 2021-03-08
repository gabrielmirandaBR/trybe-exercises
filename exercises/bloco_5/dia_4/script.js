let backgroundColor = document.getElementsByTagName('body')[0].style.backgroundColor = 'red';
let textColor = document.querySelector('.paragraph').style.color = 'white';
let fontSize = document.querySelector('.paragraph').style.fontSize = '24px';
let lineHeight = document.querySelector('.paragraph').style.lineHeight = '1.5';
let fontFamily = document.querySelector('.paragraph').style.fontFamily = 'fantasy';
let width = document.querySelector('.paragraph').style.width = '50%';

localStorage.setItem('backgroundColor', backgroundColor);
localStorage.setItem('textColor', textColor);
localStorage.setItem('fontSize', fontSize);
localStorage.setItem('lineHeight', lineHeight);
localStorage.setItem('fontFamily', fontFamily);
localStorage.setItem('width', width);