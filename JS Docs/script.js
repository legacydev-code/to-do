function addTodo() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();

    if (text !== '') {
        const list = document.getElementById('todo-list');
        const listItem = document.createElement('li');

        // Create a checkbox and add it to the list item
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.onclick = function() {
            if(this.checked) {
                listItem.classList.add('completed');
            } else {
                listItem.classList.remove('completed');
            }
        };

        listItem.appendChild(checkbox);
        listItem.append(text);

        list.appendChild(listItem);
        input.value = '';
    }
}
