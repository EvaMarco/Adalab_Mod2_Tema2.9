'use strict';

const button = document.querySelector('.btn');
const text = document.querySelector('.text');
const list = document.querySelector('.tasks__list');
const items = list.querySelector('.task');
const add = document.querySelector('.addNew');
const deleteDone = document.querySelector('.deleteDone');
let inputArray = [];

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
        name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
        completed: false
    },
];

function tareas(array) {
    let i = 0;
    let completed = 0;
    let notCompleted = 0;
    list.innerHTML = '';

    for (let items of array) {
        if (items.completed) {
            list.innerHTML += `<li class = "task line check__${i}"> ${items.name}.  <input type="checkbox" class = "input input__${i}" name="completed" id="check__${i}" checked/></li> `;
            i += 1;
            completed += 1;
        }
        else {
            list.innerHTML += `<li class = "task check__${i}">${items.name}<input type="checkbox" name="completed" id="check__${i}" class=" input input__${i}"/></li> `;
            i += 1;
            notCompleted += 1;
        }
    }

    inputArray = document.querySelectorAll('.input');
    for (let i of inputArray) {
        const input = document.querySelector(`#${i.id}`);
        input.addEventListener('change', check);
    };

    text.innerHTML = `
    En nuestra lista hay ${array.length} tareas, de las cuales hemos completado ${completed} y aún nos queda/n ${notCompleted} por terminar.: 
    `;
};

function check(event) {
    const pepe = event.currentTarget;
    const li = pepe.parentElement;
    li.classList.toggle('line');
    for (let j = 0; j < tasks.length; j++) {
        if (pepe.classList.contains(`input__${j}`)) {
            if (tasks[j].completed) {
                tasks[j].completed = false;
            }
            else {
                tasks[j].completed = true;
            }
        }
    }
    let done = 0;
    let notDone = 0;
    for (let items of tasks) {
        if (items.completed) {
            done += 1
        }
        else {
            notDone += 1;
        }
    }
    text.innerHTML = `
    En nuestra lista hay ${tasks.length} tareas, de las cuales hemos completado ${done} y aún nos queda/n ${notDone} por terminar.
    `;
}

function addNewtask(event) {
    const newName = prompt('¿cuales el tu nueva tarea');
    tasks[tasks.length] = { name: newName, completed: false };
    tareas(tasks);
}

function deleteTasks() {
    const newArray = []
    console.log('entro');
    for (let k of tasks) {
        if(!k.completed){
            console.log('entro en if');
            newArray.push(k);
            console.log(tasks);   
        }
    }
    tareas(newArray);
}

button.addEventListener('click', tareas(tasks));
add.addEventListener('click', addNewtask);
deleteDone.addEventListener('click', deleteTasks);
