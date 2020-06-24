'use strict';

const slider1 = document.querySelector('.sliderOne');
const slider2 = document.querySelector('.sliderTwo');
const slider3 = document.querySelector('.sliderThree');
const bodyTheme = document.querySelector('body');

const radioSlider1 = document.querySelector('.radio-slider-1');
const radioSlider2 = document.querySelector('.radio-slider-2');
const radioSlider3 = document.querySelector('.radio-slider-3');

const buttonContacts = document.querySelector('.button-contacts');




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






const createTemplatePopup = () => {
    return (`<div class="modal-feedback">
        <p>Мы обязательно вам ответим!</p>
        <button class="close-modal-feedback"></button>
        <form action="index.html">
            <input class="modal-feedback-name" type="text" placeholder="Как вас зовут?">
            <input class="modal-feedback-email" type="email" name="email" id="email" placeholder="Ваша почта для ответа?">
            <textarea class="modal-feedback-message" name="modal-feedback-message" id="modal-feedback-message" cols="50" rows="8" placeholder="Напишите что-нибудь..."></textarea>
            <button class="button sent-feedback-form">Отправить</button>
        </form>
    </div>
   `)
};



const createTemplateOverlay = () => {
    return (`<div class="overlay-window"></div>`)
};



const createElement = (template) => {
    const newElement = document.createElement('div');

    newElement.innerHTML = template;
    return newElement.firstChild

};



class Popup  {
    constructor() {
        this._element = null;
    }

    getTemplait(){
        return createTemplatePopup();

    }

    getElement(){
        if(!this._element) {
            this._element = createElement(this.getTemplait());

        };
        return this._element;
    }

    removeElement(){
        this._element.remove();
    }

};



class Overlay  {
    constructor() {
        this._element = null;
    }

    getTemplait(){
        return createTemplateOverlay();

    }

    getElement(){
        if(!this._element) {
            this._element = createElement(this.getTemplait());

        };

        return this._element;

    }

    removeElement(){
        this._element.remove();
    }

};


const render = () => {
    const PopupElenent = new Popup();
    const OverlayElement = new Overlay();

    const body = document.querySelector('body');

    const onEscDown = (evt) => {
        const isEscape = evt.key  === 'Esc' || evt.key === 'Escape';
        isEscape ? onClosePopup() : '';
    };

    const onOpenPopup = () => {
        body.append(PopupElenent.getElement());
        body.append(OverlayElement.getElement());
        document.addEventListener('keydown', onEscDown)
    };

    const onClosePopup = () => {
        PopupElenent.removeElement();
        OverlayElement.removeElement();
        document.removeEventListener('keydown', onEscDown)

    };


    buttonContacts.addEventListener('click', onOpenPopup);

    const modalButtonClose = PopupElenent.getElement().querySelector('.close-modal-feedback')

    modalButtonClose.addEventListener('click', onClosePopup)

};


render();






