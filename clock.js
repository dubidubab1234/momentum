const clock = document.querySelector(".clock");

const yoils = ["일", "월", "화", "수", "목", "금", "토"];

function working() {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let yoil = date.getDay();
  let hour = String(date.getHours()).padStart(2, "0");
  let minute = String(date.getMinutes()).padStart(2, "0");
  let second = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${year}. ${month}. ${day}.(${yoils[yoil]}) ${hour}:${minute}:${second}`;
}

working();
setInterval(working, 1000);
