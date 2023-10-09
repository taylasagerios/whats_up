var apiKey = "362cbe9d61e170732a21343e28d7a203";
var cityValue = document.querySelector("#input-element");
var submitBtn = document.querySelector("#submit-btn");

function getWeather () {
    console.log("CITY VALUE: ", cityValue.value)
    var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityValue.value + "&appid=" + apiKey;
    fetch(queryUrl)
    .then(function(response) {
        console.log("Response: ", response);
        return response.json();
    })
    .then(function(data) {
        console.log("DATA: ", data)
        filterForecast(data.list)
    })
}
// for(x = 0; x >= 0; x++){
//     console.log ('temp'+ [x])
// }
// for(x = 0; x >= 0; x++){
//     console.log ('temp'+ [x])
// }
// for(x = 0; x >= 0; x++){
//     console.log ('temp'+ [x])
// }
// for(x = 0; x >= 0; x++){
//     console.log ('temp'+ [x])
// }
// for(x = 0; x >= 0; x++){
//     console.log ('temp'+ [x])
// }

function filterForecast(allWeatherForecasts) {
    console.log(allWeatherForecasts)
    console.log()
    var arr = {
        date: data.date,
        temp: data.temp,
        wind: data.wind,
        humidity: data.humidity
    }
    console.log(date+'',temp+'',wind+'',+humidity);

}


submitBtn.addEventListener("click", getWeather);  