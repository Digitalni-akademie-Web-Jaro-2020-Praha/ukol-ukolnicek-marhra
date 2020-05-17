'use strict';

const tasks = [];
const todo__tasksElm = document.querySelector('.todo__tasks');

const updateTasks = () => {
  todo__tasksElm.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    todo__tasksElm.innerHTML +=
      `<div class="task"> ${tasks[i]} </div>`
  }
};

const newTask = () => {
  const newTaskElm = document.querySelector('#new-task');
  if (newTaskElm.value === '') {
    return null;
  } else {
    tasks.push(newTaskElm.value);
    updateTasks();
    newTaskElm.value = '';
  }
};

const btnElm = document.querySelector('.btn-add');
btnElm.addEventListener('click', newTask);
updateTasks(tasks);
