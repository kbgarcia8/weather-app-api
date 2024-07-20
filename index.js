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
    console.log(inputPlace.value);
});

//create object for base link and API key
const weatherAPI = {
    
}