//create object for base link and API key
const weatherAPI = {
    "key": "GD5M8NUS9XCWKJ7TVPY4MFD8A",
    "url": "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
};
const urlExtension1 = "?unitGroup=us&include=days%2Calerts%2Ccurrent&key=";
const urlExtension2 = "&contentType=json";

const inputPlace = document.querySelector(".main-form-input");
const inputForm = document.querySelector("#main-form");

//eventlistener to prompt error when inputting
inputPlace.addEventListener('input', function (e) {

    if (inputPlace.validity.patternMismatch) {
        inputPlace.setCustomValidity("Please input alphanumeric characters and either a hypen or apostrophe only!");
    } else {
        inputPlace.setCustomValidity("");
    }
});

//eventlistener to prompt error when submitting
inputForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (inputPlace.validity.patternMismatch) {
        inputPlace.setCustomValidity("Please input alphanumeric characters and either a hypen or apostrophe only!");
    } else {
        inputPlace.setCustomValidity("");
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
            const parseResponse = await response.json().then(response => {
                /* need to use .then function to process the response instead of only pending
                in this function you must also parse the JSON and equate it to what data are needed*/
                console.log(response);
                //continue here
            });
        }
    } catch (error) {//use catch to furher process the error
        console.log(`Error: ${error.message}`);
    }
}