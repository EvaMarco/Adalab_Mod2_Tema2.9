'use strict';

const button = document.querySelector('.btn');
const button2 = document.querySelector('.btn2');
const text = document.querySelector('.text');

const adalaber1 = {};
adalaber1.name = 'Susana';
adalaber1.age = '34';
adalaber1.profession = 'periodista';

const adalaber2 = {};
adalaber2.name = 'Rocio';
adalaber2.age = '25';
adalaber2.profession = 'actriz';

const phrase = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profession}.`;
const phrase2 = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.profession}.`;

function saluda() {
    text.innerHTML = phrase;
    text.classList.add('resultado');
}
function saluda2() {
    text.innerHTML = phrase2;
    text.classList.add('resultado');
}

button.addEventListener('click', saluda);
button2.addEventListener('click', saluda2);