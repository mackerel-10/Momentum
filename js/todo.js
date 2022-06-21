const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDo() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
	const li = event.target.parentElement;
	li.remove(); // UI에서만 제거되지 변수에는 계속 접근가능한 것을 알 수 있다.
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	saveToDo();
}

/* <li> 생성 후 내부에 <span>태그 추가 */
function printToDo(newTodo) {	// Todo를 그리는 역할을 담당.
	const li = document.createElement("li");
	li.id = newTodo.id;
	const span = document.createElement("span");
	span.innerText = newTodo.text;
	const button = document.createElement("button");
	button.innerText = "❌";
	button.addEventListener("click", deleteToDo);
	li.appendChild(span); // li가 span 태그를 포함하게 됨.
	li.appendChild(button);	
	toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = {
		text: toDoInput.value,
		id: Date.now()
	};
	toDoInput.value = "";
	toDos.push(newTodo);
	printToDo(newTodo);
	saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
	const toDos = JSON.parse(savedToDos);
	toDos.forEach(printToDo);
}