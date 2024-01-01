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
// Existing addTodo function...

var notesArray = [];
var currentNoteIndex = -1;

function createNewNote() {
    var newNote = { content: "" };
    notesArray.push(newNote);
    currentNoteIndex = notesArray.length - 1;
    updateNotesList();
    document.getElementById('notes-input').value = newNote.content;
}

function updateNotesList() {
    var notesList = document.getElementById('notes-list');
    notesList.innerHTML = "";
    notesArray.forEach((note, index) => {
        var noteElement = document.createElement('div');
        noteElement.textContent = "Note " + (index + 1);
        noteElement.className = 'note-item';
        noteElement.onclick = function() {
            currentNoteIndex = index;
            document.getElementById('notes-input').value = notesArray[currentNoteIndex].content;
        };
        notesList.appendChild(noteElement);
    });
}

function updateCurrentNote() {
    if (currentNoteIndex !== -1) {
        var textArea = document.getElementById('notes-input');
        notesArray[currentNoteIndex].content = textArea.value;
    }
}

// Existing openTab function...
