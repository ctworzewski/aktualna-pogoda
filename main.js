

fetch('https://api.openweathermap.org/data/2.5/weather?lat=50.8624896&lon=20.5914112&appid=74a450b82ce39d2bf37dca659bc634d7').then(data => data.json()).then(data => {
    console.log(data)
    dataWeather(data);
});

function dataWeather(data) {
    const nameCity = document.getElementById('nameCity');
    nameCity.innerHTML = data.name;

    const localTime = document.getElementById('localTime');

    const time = new Date();
    const godzina = time.getHours();
    const minuta = time.getMinutes();
    const sekunda = time.getSeconds();
console.log(godzina)
    localTime.innerHTML = `${godzina}:${minuta}:${sekunda}`;

    const valueTemperature = document.getElementById('valueTemperature');
    valueTemperature.innerHTML = data.main.temp;

    const windySpeed = document.getElementById('windySpeed');
    windySpeed.innerHTML = data.wind.speed;
}