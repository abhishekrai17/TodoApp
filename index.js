function getElementByClasName(className) {
    return document.getElementsByClassName(className)[0];
}

const addButton = getElementByClasName("add-btn");
const textInput = getElementByClasName("input-box");
const list = getElementByClasName("list-items");



function addTheTodo() {      //2
    // get the content from text input
    const todoText = textInput.value;
    const items = document.getElementsByClassName("todo");
    const length = items.length;

    // creating a new element
    const newTodo = document.createElement("div");
    const dataTag = document.createElement("p");
    const deleteButton = document.createElement("span");
    deleteButton.className = "delete";
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    deleteButton.textContent = "X";

    dataTag.textContent = todoText;
    newTodo.appendChild(dataTag);
    newTodo.appendChild(checkBox);
    newTodo.appendChild(deleteButton);
    newTodo.classList.add("todo");
    list.appendChild(newTodo);
    textInput.value = "";
    checkBox.onchange = (e) => {
        const isChecked = e.target.checked;
        newTodo.className = isChecked ? "checked-todo" : "todo";
        // newTodo.classList.add("checked-todo")
    };
    deleteButton.onclick = () => {
        //deleteTodo(length - 1);
        list.removeChild(newTodo);
    };
}

textInput.addEventListener("keydown", (e) => {    //1
    if (e.keyCode === 13) {
        addTheTodo();
    }
});

addButton.addEventListener("click", addTheTodo);  //1

