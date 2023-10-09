var apiKey = "362cbe9d61e170732a21343e28d7a203";
var cityValue = document.querySelector("#input-element");
var submitBtn = document.querySelector("#submit-btn");

function getWeather () {
    console.log("CITY VALUE: ", cityValue.value)
    var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?" + cityValue.value + "&appid=" + apiKey;
    fetch(queryUrl)
    .then(function(response) {
        console.log("Response: ", response);
        return response.json();
    })
    .then(function(data) {
        console.log("DATA: ", data)
    })
}
//var info = [(variables)
//var date = [#date]
//var temp = [#temp]
//var icon = [#icon]
//varwind = [#wind]
//var humidity = [#humidity]  
//] 


submitBtn.addEventListener("click", getWeather);  