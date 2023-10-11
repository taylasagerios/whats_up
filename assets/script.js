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
        var forecast = filterForecast(data.list)
        fillForecastHtml(forecast)
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
    // var data = allWeatherForecasts[0]
    // var arr = {
    //     date: data.dt,
    //     temp: data.main.temp,
    //     wind: data.wind,
    //     humidity: data.main.humidity
    // }
   var forecast = []
    for (var i =0;i< allWeatherForecasts.length; i+=8) {
        var data = allWeatherForecasts[i]
        forecast.push({
            date: data.dt,
            temp: data.main.temp,
            icon: data.icon,
            wind: data.wind.speed,
            humidity: data.main.humidity
        })
    }
    // console.log(date+'',temp+'',wind+'',+humidity);
    console.log("forecast:",forecast)
return forecast
}

function fillForecastHtml(forecast) {
    for(var x=0; x< forecast.length; x++){
        var tempEl = document.querySelector(`#temp-${x}`)
        console.log(tempEl)

    }
}


submitBtn.addEventListener("click", getWeather);  