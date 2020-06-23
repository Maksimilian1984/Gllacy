'use strict';

var slider1 = document.querySelector('.sliderOne');
var slider2 = document.querySelector('.sliderTwo');
var slider3 = document.querySelector('.sliderThree');
var bodyTheme = document.querySelector('body');

var radioSlider1 = document.querySelector('.radio-slider-1');
var radioSlider2 = document.querySelector('.radio-slider-2');
var radioSlider3 = document.querySelector('.radio-slider-3');
var modalFeedback = document.querySelector('.modal-feedback');
var buttonContacts = document.querySelector('.button-contacts');
var closeModalFeedback = document.querySelector('.close-modal-feedback');
var overlayWindow = document.querySelector('.overlay-window');


var checkInput = function (button1, button2, slider1, slider2, color) {

        button2.checked = true;
        slider2.style.display = 'block';
        slider1.style.display = 'none';
        bodyTheme.style.background = color;
        console.log(button1.checked, button2.checked)

};




var runSlider = function() {
    if(radioSlider1.checked) {
        checkInput(radioSlider1, radioSlider2, slider1, slider2, '#8996a6');
    } else if (radioSlider2.checked) {
        checkInput(radioSlider2, radioSlider3, slider2, slider3, '#9d8b84');
    } else if (radioSlider3.checked) {
        checkInput(radioSlider3, radioSlider1, slider3, slider1, '#849d8f');
    }

};




setInterval(runSlider, 4000);

console.log(radioSlider1.checked);

// для модального окна

buttonContacts.addEventListener('click', function (evt)  {
    evt.preventDefault();
    modalFeedback.classList.add('visible');
    overlayWindow.classList.add('visible');

});

closeModalFeedback.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalFeedback.classList.remove('visible');
    overlayWindow.classList.remove('visible');
});

