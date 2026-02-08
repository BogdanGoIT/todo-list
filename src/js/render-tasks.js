import { markupTasks } from "./markup-tasks";
import { refs } from "./refs";

export function render(arr){
    refs.list.innerHTML = markupTasks(arr);
}