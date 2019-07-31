'use strict';

const button = document.querySelector('.btn');
const text = document.querySelector('.text');

const lostNumbers = [4, 8, 15, 16, 23, 42];
let evenLostNumbers = [];
let multipleLostNumbers = [];

function bestLostNomber(){
    for(let items of lostNumbers){
        if(items%2 === 0){
            evenLostNumbers.push(items);
        }
        else if(items%3 === 0){
            multipleLostNumbers.push(items);
        }
    }
    const concatLost = evenLostNumbers.concat(multipleLostNumbers);
    console.log(evenLostNumbers);
    console.log(multipleLostNumbers);
    console.log(concatLost);
    text.innerHTML = `Los números pares son : 
    ${evenLostNumbers}.
    Los múltiplos de tres son: ${multipleLostNumbers}.
    La concatenación de los dos arrays es: ${concatLost}.`
}

button.addEventListener('click', bestLostNomber);
