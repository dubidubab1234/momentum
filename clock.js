const clock = document.querySelector(".clock");

setInterval(() => {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getHours()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hour}:${minute}:${second}`;
}, 1000);
