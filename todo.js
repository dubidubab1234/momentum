const todoForm = document.getElementById("todos-form");
const todoInput = document.getElementById("todos-input");
const ul = document.getElementById("todos");

let todosArray = [];

function saveTodos(newTodosArray) {
  localStorage.setItem("todos", JSON.stringify(newTodosArray));
}

function deleteTodo(e) {
  const id = e.target.parentElement.id;
  todosArray = todosArray.filter((item) => parseInt(id) !== item.id);
  e.target.parentElement.remove();
  localStorage.setItem("todos", JSON.stringify(todosArray));
}

function paintTodos(obj) {
  const newTodo = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "delete";
  span.innerText = obj.name;
  newTodo.appendChild(span);
  newTodo.appendChild(button);
  todoInput.value = "";
  ul.appendChild(newTodo);
  newTodo.id = obj.id;
  button.addEventListener("click", deleteTodo);
}

function handleTodos(e) {
  e.preventDefault();
  const todo = todoInput.value;
  const newTodoObj = { id: Date.now(), name: todo };
  paintTodos(newTodoObj);
  todosArray.push(newTodoObj);
  saveTodos(todosArray);
}

todoForm.addEventListener("submit", handleTodos);

const localstroageTodos = localStorage.getItem("todos");

if (localstroageTodos) {
  const parsedTodos = JSON.parse(localstroageTodos);
  parsedTodos.forEach((item) => paintTodos(item));
  todosArray = parsedTodos;
}
