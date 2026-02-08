import { refs } from './js/refs';
import { addTask, deleteTask, initTasks } from './js/tasks';



initTasks();
refs.list.addEventListener('click', deleteTask);
refs.form.addEventListener('submit', addTask);

