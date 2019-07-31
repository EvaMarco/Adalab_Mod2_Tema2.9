'use strict';

const button = document.querySelector('.btn');
const text = document.querySelector('.text');
const array = [];

function get100Numbers() {
    for(let i = 0; i < 100; i++){
        array.push(i+1);
        text.innerHTML += `${array[i]} </br>`;
    }
}

button.addEventListener('click', get100Numbers);