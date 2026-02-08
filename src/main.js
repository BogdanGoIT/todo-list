import { refs } from './js/refs';
import { addTask } from './js/tasks';

refs.form.addEventListener('submit', addTask);
