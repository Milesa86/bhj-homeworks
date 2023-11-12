const input = document.getElementById('task__input')
const tasksList = document.getElementById('tasks__list')
const form = document.getElementById('tasks__form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text !== '') {
       const newTaskElem = `
            <div class="task">
                <div class="task__title">
                    ${input.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`;
        tasksList.insertAdjacentHTML('beforeEnd', newTaskElem)
        input.value = '';

        tasks.querySelector('.task__remove').addEventListener('click', event => {
            event.target.closest('.task').remove();
        });
    }
})