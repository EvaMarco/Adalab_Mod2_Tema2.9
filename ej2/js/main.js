'use strict';

const button = document.querySelector('.btn');
const text = document.querySelector('.text');
const array = [];
let arrayReverse = [];

function get100Numbers() {
    for(let i = 0; i < 100; i++){
        array.push(i+1);
    }
    return array
}

function get100ReverseNumbers() {
    const newArray = get100Numbers();
    arrayReverse = newArray.reverse()
    for (let items of arrayReverse){
        console.log(items);
        text.innerHTML += `${items} </br>`;
    }
    return arrayReverse;
}

button.addEventListener('click', get100ReverseNumbers);