var slider1 = document.querySelector('.sliderOne');
var slider2 = document.querySelector('.sliderTwo');
var slider3 = document.querySelector('.sliderThree');
var bodyTheme = document.querySelector('body');

var radioSlider1 = document.querySelector('.radio-slider-1');
var radioSlider2 = document.querySelector('.radio-slider-2');
var radioSlider3 = document.querySelector('.radio-slider-3');


if(radioSlider1.checked) {
    slider1.classList.remove('invisible');
    bodyTheme.classList.add('theme-1');
}

radioSlider1.addEventListener('change', function () {
    slider1.classList.remove('invisible');
    slider2.classList.add('invisible');
    slider3.classList.add('invisible');
    bodyTheme.classList.add('theme-1');
    bodyTheme.classList.remove('theme-2');
    bodyTheme.classList.remove('theme-3');
})

radioSlider2.addEventListener('change', function () {
    slider2.classList.remove('invisible');
    slider1.classList.add('invisible');
    slider3.classList.add('invisible');
    bodyTheme.classList.add('theme-2');
    bodyTheme.classList.remove('theme-1');
    bodyTheme.classList.remove('theme-3');
})
radioSlider3.addEventListener('change', function () {
    slider3.classList.remove('invisible');
    slider1.classList.add('invisible');
    slider2.classList.add('invisible');
    bodyTheme.classList.add('theme-3');
    bodyTheme.classList.remove('theme-1');
    bodyTheme.classList.remove('theme-2');
})


