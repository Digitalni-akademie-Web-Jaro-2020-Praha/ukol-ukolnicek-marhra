'use strict';

let tasks = [];
let todo__tasksElm = document.querySelector('.todo__tasks');

const updateTasks = () => {
  todo__tasksElm.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    todo__tasksElm.innerHTML +=
      `<div class="task"> ${tasks[i]} </div>`
  }
};



console.log('funguju!');

//const newTaskElm = document.querySelector('#new-task');
//const btnElm = document.querySelector('.btn-add');

