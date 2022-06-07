const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string을 중복적으로 작성할 때 오타가 생기는 걸 방지하기 위한 변수
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
	event.preventDefault();
	loginForm.classList.add("hidden");
	localStorage.setItem(USERNAME_KEY, loginInput.value);
	paintGreetings();
}

function paintGreetings() {
	const username = localStorage.getItem(USERNAME_KEY);
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	// show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	// submit 이벤트가 일어났을 경우 진행
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	// show the greetings
	paintGreetings();
}

