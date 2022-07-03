const API_KEY = "a4d65c05874124a38298ae1cdf1af33a";

navigator.geolocation.getCurrentPosition(
  (position) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        const city = result.name;
        const weather = result.weather[0].main;
        const temper = result.main.temp;

        const div = document.getElementById("weather");
        console.dir(div);
        const citySpan = div.children[0];
        const weatherSpan = div.children[1];

        weatherSpan.innerText = `${weather}/${temper}`;
      });
  },
  () => alert("Couldn't locate you")
);
