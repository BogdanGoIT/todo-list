import { refs } from './js/refs';
import { addTask, initTasks } from './js/tasks';

initTasks();
refs.form.addEventListener('submit', addTask);