export function markupTasks(arr){
    return arr.map(({title, description, id}) => `<li class="task-list-item">
    <button class="task-list-item-btn" data-id="${id}">Delete</button>
    <h3>${title}</h3>
    <p>${description}</p>
</li>`).join("");
}