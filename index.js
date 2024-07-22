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
        
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            //Create an error function to log status from HTTP response
        } else {
            weatherInfoDiv.setAttribute('style', 'display: flex');
            body.classList.add('body-adjust');
            const parseResponse = await response.json().then(data => {
                /* need to use .then function to process the response instead of only pending
                in this function you must also parse the JSON and equate it to what data are needed*/
                //console.log(data['currentConditions'].icon);
                console.log(data);
                console.log(data['currentConditions'].conditions);
                //continue here to call the function to display all data on weather info space div
            });
        }
    } catch (error) {//use catch to furher process the error
        console.log(`Error: ${error.message}`);
    }
}

//function to display information
function displayWeatherInfo() {

}