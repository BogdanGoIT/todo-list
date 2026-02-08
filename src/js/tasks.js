import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { render } from './render-tasks';
import { getStorage, LOCALKEY_TASKS, saveStorage } from './local-storage-api';

const arrTasks = getStorage(LOCALKEY_TASKS) ?? [];
export function initTasks() {
  render(arrTasks);
}

export function addTask(evt) {
  evt.preventDefault();

  const { taskName, taskDescription } = evt.target.elements;

  const title = taskName.value.trim();
  const description = taskDescription.value.trim();

  if (!title || !description) {
    iziToast.warning({ message: 'Fill all fields', position: 'center' });
    return;
  }

  const task = { title, description };

  arrTasks.push(task);
  render(arrTasks);
  saveStorage(LOCALKEY_TASKS, arrTasks);
  evt.target.reset();
}
