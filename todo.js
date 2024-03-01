const input = document.getElementById('todo');
const addBtn = document.getElementById('addBtn');
const list = document.querySelector('.todolist'); // Changed document.get to document.querySelector

function clickButton(e) {
    e.preventDefault();
    addTodo();
}

function addTodo() {
    const itemall = document.createElement('div');
    itemall.classList.add('itemall');

    const item = document.createElement('p');
    item.classList.add('item');
    item.innerText = input.value;
    itemall.appendChild(item);

    if (input.value === '') {
        return;
    }
    const checkbutton = document.createElement("button");
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkbutton.classList.add("check-button");
    itemall.appendChild(checkbutton);

    const trashbutton = document.createElement("button");
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashbutton.classList.add("trash-button");
    itemall.appendChild(trashbutton);

    list.appendChild(itemall);
    input.value = '';
}

function deleteToDo(e) {
    const item = e.target;
    if (item.classList.contains('check-button')) { 
        const todolist = item.parentElement;
        todolist.classList.toggle('checklist');
    }

    if (item.classList.contains('trash-button')) { 
        const todolist = item.parentElement;
        todolist.remove();
    }
}

addBtn.addEventListener('click', clickButton);
list.addEventListener('click', deleteToDo);
