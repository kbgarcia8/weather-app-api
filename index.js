//create object for base link and API key
const weatherAPI = {
    "key": "GD5M8NUS9XCWKJ7TVPY4MFD8A",
    "url": "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
};
const urlExtension1 = "?unitGroup=metric&key=";
const urlExtension2 = "&contentType=json";

const inputPlace = document.querySelector(".main-form-input");
const inputForm = document.querySelector("#main-form");
const body = document.body;

const weatherInfoDiv = document.querySelector(".weather-info-space");

//eventlistener to prompt error when inputting
inputPlace.addEventListener('input', function (e) {

    if (inputPlace.validity.patternMismatch) {
        inputPlace.setCustomValidity("Please input alphanumeric characters and either a hypen or apostrophe only!");
        inputPlace.classList.remove('main-form-input-valid');
        inputPlace.classList.add('main-form-input-invalid');
    } else if (inputPlace.validity.tooShort) {
        inputPlace.setCustomValidity("Please input atleast 4 characters");
        inputPlace.classList.remove('main-form-input-valid');
        inputPlace.classList.add('main-form-input-invalid');
    } else if (inputPlace.validity.tooLong) {
        inputPlace.setCustomValidity("Please input a maximum of 56 character");
        inputPlace.classList.remove('main-form-input-valid');
        inputPlace.classList.add('main-form-input-invalid');
    } else {
        inputPlace.setCustomValidity("");
        inputPlace.classList.remove('main-form-input-invalid');
        inputPlace.classList.add('main-form-input-valid');
    }
});

//eventlistener to prompt error when submitting
inputForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (inputPlace.validity.patternMismatch) {
        inputPlace.setCustomValidity("Please input alphanumeric characters and either a hypen or apostrophe only!");
        inputPlace.classList.remove('main-form-input-valid');
        inputPlace.classList.add('main-form-input-invalid');
    } else if (inputPlace.validity.tooShort) {
        inputPlace.setCustomValidity("Please input atleast 4 characters");
        inputPlace.classList.remove('main-form-input-valid');
        inputPlace.classList.add('main-form-input-invalid');
    } else if (inputPlace.validity.tooLong) {
        inputPlace.setCustomValidity("Please input a maximum of 56 character");
        inputPlace.classList.remove('main-form-input-valid');
        inputPlace.classList.add('main-form-input-invalid');
    } else {
        inputPlace.setCustomValidity("");
        inputPlace.classList.remove('main-form-input-invalid');
        inputPlace.classList.add('main-form-input-valid');
    }
    const location = inputPlace.value;
    console.log(location);
    getRawWeatherData(location);
});

//get weather data
async function getRawWeatherData(location) {
    try {
        const response = await fetch(`${weatherAPI.url}${location}${urlExtension1}${weatherAPI.key}${urlExtension2}`, {mode: 'cors'});
        weatherInfoDiv.setAttribute('style', 'display: flex');
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            //Create an error function to log status from HTTP response
        } else {
            
            body.classList.add('body-adjust');
            const parseResponse = await response.json().then(data => {
                /* need to use .then function to process the response instead of only pending
                in this function you must also parse the JSON and equate it to what data are needed*/
                //console.log(data['currentConditions'].icon);
                console.log(data);
                //console.log(data['currentConditions'].conditions);
                //continue here to call the function to display all data on weather info space div
                const address = data.resolvedAddress;
                const tmp = data['currentConditions'].temp;
                const currDate = data['days'][0].datetime;
                const currTime = data['currentConditions'].datetime;
                const cond = data['currentConditions'].conditions;
                const humid = data['currentConditions'].humidity;
                const rise = data['currentConditions'].sunrise;
                const set = data['currentConditions'].sunset;
                const speed = data['currentConditions'].windspeed;
                const visib = data['currentConditions'].visibility;
                const condIcon = data['currentConditions'].icon;
                displayWeatherInfo(weatherInfoDiv, address, tmp, currDate, currTime, cond, humid, rise, set, speed, visib, condIcon);
            });
        }
    } catch (error) {//use catch to furher process the error
        console.log(`Error: ${error.message}`);
    }
}

//function to display information
function displayWeatherInfo(weatherInfoDiv, place, temperature, date, currentTime, condition, humidity, sunrise, sunset, windspeed, visibility, icon) {

    const childNodes = weatherInfoDiv.childNodes;

    Array.from(childNodes).forEach(child => {
        weatherInfoDiv.removeChild(child);
    });

    const processedPlace = place.split(',');
    const exactLoc =  `${processedPlace[0]}`;
    const processedDate = convertDateFormat(date);
    const processedTime = convertTo12HourFormat(currentTime);
    const processedSunriseTime = convertTo12HourFormat(sunrise);
    const processedSunsetTime = convertTo12HourFormat(sunset);

    var weather_info_node_2 = document.createElement('H2');
    weather_info_node_2.textContent = `${exactLoc}`;
    weatherInfoDiv.appendChild(weather_info_node_2);
    
    var weather_info_node_4 = document.createElement('SPAN');
    weather_info_node_4.setAttribute('class', 'temperature');
    weather_info_node_4.textContent = `${temperature} °C`;
    weatherInfoDiv.appendChild(weather_info_node_4);
    
    var weather_info_node_6 = document.createElement('SPAN');
    weather_info_node_6.setAttribute('class', 'date-and-time');
    weather_info_node_6.textContent = `${processedDate} ${processedTime}`;
    weatherInfoDiv.appendChild(weather_info_node_6);
    
    var weather_info_node_8 = document.createElement('DIV');
    weather_info_node_8.setAttribute('class', 'condition-and-humidity');
    weatherInfoDiv.appendChild(weather_info_node_8);
    
    var weather_info_node_9 = document.createElement('DIV');
    weather_info_node_9.setAttribute('class', 'condition');
    weather_info_node_8.appendChild(weather_info_node_9);
    
    var weather_info_node_10 = document.createElement('IMG');
    if (icon == "clear-day") {
        weather_info_node_10.setAttribute('src', './images/static/day.svg');
    } else if (icon == "clear-night") {
        weather_info_node_10.setAttribute('src', './images/static/night.svg');
    } else if (icon == "rain") {
        weather_info_node_10.setAttribute('src', './images/static/rainy-7.svg');
    } else if (icon == "partly-cloudy-day") {
        weather_info_node_10.setAttribute('src', './images/static/cloudy-day-3.svg');
    } else if (icon == "partly-cloudy-night") {
        weather_info_node_10.setAttribute('src', './images/static/cloudy-night-3.svg');
    } else if (icon == "cloudy") {
        weather_info_node_10.setAttribute('src', './images/static/cloudy.svg');
    } else if (icon == "snow") {
        weather_info_node_10.setAttribute('src', './images/static/snowy-5.svg');
    } else if (icon == "thunder" || icon == "storm") {
        weather_info_node_10.setAttribute('src', './images/static/thunderr.svg');
    }
    weather_info_node_10.setAttribute('alt', 'weather-icon');
    weather_info_node_10.setAttribute('class', 'weather-condition-icon');
    weather_info_node_9.appendChild(weather_info_node_10);
    
    var weather_info_node_11 = document.createElement('SPAN');
    weather_info_node_11.setAttribute('class', 'condition-text');
    weather_info_node_11.textContent = `${condition}`;
    weather_info_node_9.appendChild(weather_info_node_11);
    
    var weather_info_node_13 = document.createElement('DIV');
    weather_info_node_13.setAttribute('class', 'humidity');
    weather_info_node_8.appendChild(weather_info_node_13);
    
    var weather_info_node_14 = document.createElement('IMG');
    weather_info_node_14.setAttribute('src', './images/humidity-svgrepo-com.svg');
    weather_info_node_14.setAttribute('alt', 'humidity-icon');
    weather_info_node_14.setAttribute('class', 'humidity-condition-icon');
    weather_info_node_13.appendChild(weather_info_node_14);
    
    var weather_info_node_15 = document.createElement('SPAN');
    weather_info_node_15.setAttribute('class', 'humidity-text');
    weather_info_node_15.textContent = `${humidity}%`
    weather_info_node_13.appendChild(weather_info_node_15);
    
    var weather_info_node_16 = document.createElement('DIV');
    weather_info_node_16.setAttribute('class', 'sunrise-and-sunset');
    weatherInfoDiv.appendChild(weather_info_node_16);
    
    var weather_info_node_17 = document.createElement('DIV');
    weather_info_node_17.setAttribute('class', 'sunrise');
    weather_info_node_16.appendChild(weather_info_node_17);
    
    var weather_info_node_18 = document.createElement('IMG');
    weather_info_node_18.setAttribute('src', './images/sunrise-svgrepo-com.svg');
    weather_info_node_18.setAttribute('alt', 'sunrise-icon');
    weather_info_node_18.setAttribute('class', 'sunrise-condition-icon');
    weather_info_node_17.appendChild(weather_info_node_18);
    
    var weather_info_node_19 = document.createElement('SPAN');
    weather_info_node_19.setAttribute('class', 'sunrise-text');
    weather_info_node_19.textContent = `${processedSunriseTime}`;
    weather_info_node_17.appendChild(weather_info_node_19);
    
    var weather_info_node_21 = document.createElement('DIV');
    weather_info_node_21.setAttribute('class', 'sunset');
    weather_info_node_16.appendChild(weather_info_node_21);
    
    var weather_info_node_22 = document.createElement('IMG');
    weather_info_node_22.setAttribute('src', './images/sunset-svgrepo-com.svg');
    weather_info_node_22.setAttribute('alt', 'sunset-icon');
    weather_info_node_22.setAttribute('class', 'sunset-condition-icon');
    weather_info_node_21.appendChild(weather_info_node_22);
    
    var weather_info_node_23 = document.createElement('SPAN');
    weather_info_node_23.setAttribute('class', 'sunset-text');
    weather_info_node_23.textContent = `${processedSunsetTime}`;
    weather_info_node_21.appendChild(weather_info_node_23);
    
    var weather_info_node_25 = document.createElement('DIV');
    weather_info_node_25.setAttribute('class', 'windspeed-and-visibility');
    weatherInfoDiv.appendChild(weather_info_node_25);
    
    var weather_info_node_26 = document.createElement('DIV');
    weather_info_node_26.setAttribute('class', 'windspeed');
    weather_info_node_25.appendChild(weather_info_node_26);
    
    var weather_info_node_27 = document.createElement('IMG');
    weather_info_node_27.setAttribute('src', './images/wind-svgrepo-com.svg');
    weather_info_node_27.setAttribute('alt', 'windspeed-icon');
    weather_info_node_27.setAttribute('class', 'windspeed-condition-icon');
    weather_info_node_26.appendChild(weather_info_node_27);
    
    var weather_info_node_28 = document.createElement('SPAN');
    weather_info_node_28.setAttribute('class', 'windspeed-text');
    weather_info_node_28.textContent = `${windspeed} KM/H`
    weather_info_node_26.appendChild(weather_info_node_28);
    
    var weather_info_node_30 = document.createElement('DIV');
    weather_info_node_30.setAttribute('class', 'visibility');
    weather_info_node_25.appendChild(weather_info_node_30);
    
    var weather_info_node_31 = document.createElement('IMG');
    weather_info_node_31.setAttribute('src', './images/visibility-show-svgrepo-com.svg');
    weather_info_node_31.setAttribute('alt', 'visibility-icon');
    weather_info_node_31.setAttribute('class', 'visibility-condition-icon');
    weather_info_node_30.appendChild(weather_info_node_31);
    
    var weather_info_node_32 = document.createElement('SPAN');
    weather_info_node_32.setAttribute('class', 'visibility-text');
    weather_info_node_32.textContent = `${visibility} KM`
    weather_info_node_30.appendChild(weather_info_node_32);
}

//function to convert military time to 12HR time format
function convertTo12HourFormat(time24) {
    let [hours, minutes, seconds] = time24.split(':').map(Number);

    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert hour from 24-hour to 12-hour format

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${period}`;
}

//function to convert YYYY-MM-DD to MMM-DD-YYYY
function convertDateFormat(dateStr) {
    const date = new Date(dateStr);
    
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getDate().toString().padStart(2, '0');
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${day} ${year}`;
}