import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const arrTasks = [];

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

  evt.target.reset();
}
