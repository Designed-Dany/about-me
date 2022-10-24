let offset = 0; // смещение от левого края;
const sliderLine = document.querySelector('.slider-line');
let container = document.querySelector('.container');
let alertError = document.querySelector('.error');
let inputEmail = document.querySelector('.input-email');
let formInputs = document.querySelectorAll('.js-input');
document.querySelector('.arrow-left-btn').addEventListener('click', function() {
    offset = offset + 750;
    if (offset > 2000) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})

document.querySelector('.arrow-right-btn').addEventListener('click', function() {
    offset = offset - 750;
    if (offset < 0) {
        offset = 1500;
    }
    sliderLine.style.left = -offset + 'px';
})

alertError.addEventListener('click', function () {
    alert('Ошибка - это повод хорошо подумать:)')
})

// выпадающий список
document.addEventListener('DOMContentLoaded', hiddenCloseclick());
document.getElementById('click-to-hide').addEventListener('click', hiddenCloseclick);

function hiddenCloseclick() {
	let x = document.getElementById('hidden-element');
      if (x.style.display == "none"){
	  x.style.display = "block";
	  } else {
	 x.style.display = "none"}
    };



    