const currentTemp = document.querySelector('#status');
const weatherIcon = document.querySelector('#icon-status');
const captionDesc = document.querySelector('#description');
const windspeed = document.querySelector('#wind');
const windChild = document.querySelector('#windChild');
// const key = "81a64fb24df32257666da98e2da69fe7";

async function apiFetch() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Mexico&units=imperial&appid=81a64fb24df32257666da98e2da69fe7';
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>` + "°F";
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    windspeed.innerHTML = "Wind speed: " + weatherData.weather[0].wind.speed;
    windChild.innerHTML = "Wind child: " + windchill(weatherData.main.temp.toFixed(0), weatherData.weather[0].wind.speed);
    /**/
}

function windchill(temperature, speed){
    if(speed>3.0 && temperature<=50){
        return 35.74 + (0.6215*temperature)-(35.75*(speed**0.16)) + (0.4275*temperature*(speed**0.16))
    }else{
        return "N/A"
    }
}