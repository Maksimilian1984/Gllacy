'use strict';

const slider1 = document.querySelector('.sliderOne');
const slider2 = document.querySelector('.sliderTwo');
const slider3 = document.querySelector('.sliderThree');
const bodyTheme = document.querySelector('body');

const radioSlider1 = document.querySelector('.radio-slider-1');
const radioSlider2 = document.querySelector('.radio-slider-2');
const radioSlider3 = document.querySelector('.radio-slider-3');
const modalFeedback = document.querySelector('.modal-feedback');
const buttonContacts = document.querySelector('.button-contacts');
const closeModalFeedback = document.querySelector('.close-modal-feedback');
const overlayWindow = document.querySelector('.overlay-window');


const checkInput =  (button, slider1, slider2, color) => {

        button.checked = true;
        slider2.style.display = 'block';
        slider1.style.display = 'none';
        bodyTheme.style.background = color;


};




const runSlider = () => {
    if(radioSlider1.checked) {
        checkInput(radioSlider2, slider1, slider2, '#8996a6');
    } else if (radioSlider2.checked) {
        checkInput(radioSlider3, slider2, slider3, '#9d8b84');
    } else if (radioSlider3.checked) {
        checkInput(radioSlider1, slider3, slider1, '#849d8f');
    }

};






setInterval(runSlider, 4000);



// для модального окна

const onEscDown = (evt) => {
    const isEscape = evt.key  === 'Esc' || evt.key === 'Escape';
    isEscape ? onClosePopup() : '';


};

const onPopup = () => {
    modalFeedback.classList.add('visible');
    overlayWindow.classList.add('visible');
    document.addEventListener('keydown', onEscDown)
};

const onClosePopup = () => {
    modalFeedback.classList.remove('visible');
    overlayWindow.classList.remove('visible');
    document.removeEventListener('keydown' , onEscDown)
};


buttonContacts.addEventListener('click', onPopup);

closeModalFeedback.addEventListener('click', onClosePopup);



