export function markupTasks(arr){
    return arr.map(({title, description}) => `<li class="task-list-item">
    <button class="task-list-item-btn">Delete</button>
    <h3>${title}</h3>
    <p>${description}</p>
</li>`).join("");
}