const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const hello = document.getElementsByClassName("hello")[0];
const clockClass = document.querySelector(".clock");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = loginInput.value;
  hello.innerHTML = `Hello ${user}`;
  localStorage.setItem("user", user);
  loginForm.classList.add("hidden");
});

if (localStorage.length >= 1) {
  loginForm.classList.add("hidden");
  hello.innerHTML = `Hello ${localStorage.getItem("user")}`;
}
