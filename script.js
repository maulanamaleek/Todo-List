//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//event listener
todoButton.addEventListener("click", addTodo);
//Function
function addTodo(event) {
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // // create li 
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // // checked mark 
    const completedButton = document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // //trash
    const trashButton = document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // // append to list 
    todoList.appendChild(todoDiv);
}