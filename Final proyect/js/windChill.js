

async function apiFetch() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Mexico&units=imperial&appid=81a64fb24df32257666da98e2da69fe7';
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            // console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    divs = document.querySelectorAll(".day-weather");
    let cont = 0;
    let random = getRandomArbitrary(-4,4);
    console.log(random);
    divs.forEach(divisor => {
        if(cont == 0){
            printDate(divisor.children[0], divisor.children[0].id);
            divisor.children[2].innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>` + "°F";
            const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
            const desc = weatherData.weather[0].description;
            divisor.children[1].setAttribute('src', iconsrc);
            divisor.children[1].setAttribute('alt', desc);
            divisor.children[3].textContent = desc;
            divisor.children[4].innerHTML = "Wind speed: " + weatherData.wind.speed + " km/hr";
            divisor.children[5].innerHTML = "Humidity: " + weatherData.main.humidity;
        }else{
            printDate(divisor.children[0], divisor.children[0].id);
            divisor.children[2].innerHTML = `<strong>${parseInt(weatherData.main.temp + random)}</strong>` + "°F";
            const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
            const desc = weatherData.weather[0].description;
            divisor.children[1].setAttribute('src', iconsrc);
            divisor.children[1].setAttribute('alt', desc);
            divisor.children[3].textContent = desc;
            divisor.children[4].innerHTML = "Wind speed: " + (weatherData.wind.speed + Math.round(random)).toFixed(2) + " km/hr";
            divisor.children[5].innerHTML = "Humidity: " + parseFloat(weatherData.main.humidity + random);
        }
        cont+=1;
        random = getRandomArbitrary(-2,3);
    });
}
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function printDate(title, option){
    let day= new Date().getDay();
    if(option == 1){
        day = day;
    }else if(option == 2){
        day = day + 1;
        
    }else{
        day = day + 2;
    }
    switch (day) {
        case 1:
            title.innerHTML = "Monday";
            break;
        case 2:
            title.innerHTML = "Tuesday";
            
        break;
        case 3:
            title.innerHTML = "Wednesday";
            
        break;
        case 4:
            title.innerHTML = "Thursday";
            
        break;
        case 5:
            title.innerHTML = "Friday";
            
        break;
        case 6:
            title.innerHTML = "Saturday";
            
        break;
        case 7:
            title.innerHTML = "Sunday";
            
        break;
    
        default:
            break;
    }
}
