// time moment.js
const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
document.getElementById("currentDate").innerHTML = currentDate;


// API call
let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
let lat = "lat=52.229676&";
let lon = "lon=21.012229&";
let apiOptions = "units=metric&exclude=minutely,alerts&";
let apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e";
let file = queryUrl + lat + lon + apiOptions + apiKey;




fetch(file)
.then((response) => response.json())
.then((data) => {
    // Weather main data
    let main = data.current.weather[0].main;
    let description = data.current.weather[0].description;
    let temp = Math.round(data.current.temp);
    let pressure = data.current.pressure;
    let humidity = data.current.humidity;
    let UVI = data.current.uvi
    let windSpeed = data.current.wind_speed
    let name = "Warsaw-temporarily";
 

    document.getElementById("wrapper-description").innerHTML = description;
    // $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'))
    document.getElementById("wrapper-temp").innerHTML = temp + "°C";
    document.getElementById("wrapper-pressure").innerHTML = pressure + " hPa";
    document.getElementById("wrapper-humidity").innerHTML = humidity + "%";
    document.getElementById("wrapper-name").innerHTML = name;
    document.getElementById("wrapper-UVindex").innerHTML = UVI;
    document.getElementById("wrapper-windSpeed").innerHTML = windSpeed + "m/s";
    
    // Weather hourly data
    let hourNow = data.hourly[0].temp;
    let hour1 = data.hourly[1].temp;
    let hour2 = data.hourly[2].temp;
    let hour3 = data.hourly[3].temp;
    let hour4 = data.hourly[4].temp;
    let hour5 = data.hourly[5].temp;
    
    document.getElementById("wrapper-hour-now").innerHTML = hourNow + "°";
    document.getElementById("wrapper-hour1").innerHTML = hour1 + "°";
    document.getElementById("wrapper-hour2").innerHTML = hour2 + "°";
    document.getElementById("wrapper-hour3").innerHTML = hour3 + "°";
    document.getElementById("wrapper-hour4").innerHTML = hour4 + "°";
    document.getElementById("wrapper-hour5").innerHTML = hour5 + "°";
    
    // Time
    let timeNow = new Date().getHours();
    let time1 = timeNow + 1;
    let time2 = time1 + 1;
    let time3 = time2 + 1;
    let time4 = time3 + 1;
    let time5 = time4 + 1;
    
    document.getElementById("wrapper-time1").innerHTML = time1;
    document.getElementById("wrapper-time2").innerHTML = time2;
    document.getElementById("wrapper-time3").innerHTML = time3;
    document.getElementById("wrapper-time4").innerHTML = time4;
    document.getElementById("wrapper-time5").innerHTML = time5;
    
    // Weather daily data
    let tomorrowTemp = Math.round(data.daily[0].temp.day);
    let dATTemp = Math.round(data.daily[1].temp.day);
    let A3DTemp = Math.round(data.daily[2].temp.day);
    let A4DTemp = Math.round(data.daily[3].temp.day);
    let A5DTemp = Math.round(data.daily[4].temp.day);
    let tomorrowHumidity = data.daily[0].humidity
    let dATHumidity = data.daily[1].humidity
    let A3DHumidity = data.daily[2].humidity
    let A4DHumidity = data.daily[3].humidity
    let A5DHumidity = data.daily[4].humidity
    let tomorrowwindSpeed = data.daily[0].wind_speed
    let dATwindSpeed  = data.daily[1].wind_speed
    let A3DwindSpeed  = data.daily[2].wind_speed
    let A4DwindSpeed  = data.daily[3].wind_speed
    let A5DwindSpeed  = data.daily[4].wind_speed
    
    console.log(tomorrowwindSpeed)
    
    let tomorrowMain = data.daily[0].weather[0].main;
    let dATTempMain = data.daily[1].weather[0].main;
    
    
    
    document.getElementById("wrapper-forecast-temp-today").innerHTML ="temp : " + temp + "°C "+" | "+"humidaty : "+ tomorrowHumidity + "%" +" | "+"Wind Speed : "+ tomorrowwindSpeed + "m/s";
    document.getElementById("wrapper-forecast-temp-tomorrow").innerHTML = "temp : "+ tomorrowTemp + "°C "+" | "+"humidaty : "+ dATHumidity + "%" +" | "+"Wind Speed : "+ tomorrowwindSpeed + "m/s" ;
    document.getElementById("wrapper-forecast-temp-dAT").innerHTML = "temp : " + dATTemp + "°C "+" | "+"humidaty : "+ tomorrowHumidity + "%" +" | "+"Wind Speed : "+ dATwindSpeed + "m/s";
    document.getElementById("wrapper-forecast-temp-A3D").innerHTML = "temp : " + A3DTemp + "°C "+" | "+"humidaty : "+ A3DHumidity + "%" +" | "+"Wind Speed : "+ A3DwindSpeed + "m/s";
    document.getElementById("wrapper-forecast-temp-A4D").innerHTML = "temp : " + A4DTemp + "°C "+" | "+"humidaty : "+ A4DHumidity + "%" +" | "+"Wind Speed : "+ A4DwindSpeed + "m/s"
    document.getElementById("wrapper-forecast-temp-A5D").innerHTML = "temp : " + A5DTemp + "°C "+" | "+"humidaty : "+ A5DHumidity + "%" +" | "+"Wind Speed : "+ A5DwindSpeed + "m/s"
    
    // Icons
    let iconBaseUrl = "http://openweathermap.org/img/wn/";
    let iconFormat = ".png";
    
    // Today
    let iconCodeToday = data.current.weather[0].icon;
    let iconFullyUrlToday = iconBaseUrl + iconCodeToday + iconFormat;
    document.getElementById("wrapper-icon-today").src = iconFullyUrlToday;
    
    // Tomorrow
    let iconCodeTomorrow = data.daily[0].weather[0].icon;
    let iconFullyUrlTomorrow = iconBaseUrl + iconCodeTomorrow + iconFormat;
    document.getElementById(
        "wrapper-icon-tomorrow"
        ).src = iconFullyUrlTomorrow;
        
        // Day after tomorrow
        let iconCodeDAT = data.daily[1].weather[0].icon;
        let iconFullyUrlDAT = iconBaseUrl + iconCodeDAT + iconFormat;
        document.getElementById("wrapper-icon-dAT").src = iconFullyUrlDAT;
        
        console.log(iconFullyUrlDAT)
        // Day after 3 days
        let iconCodeA3D = data.daily[2].weather[0].icon;
        // let iconFullyUrlDAT = iconBaseUrl + iconCodeDAT + iconFormat;
        // document.getElementById("wrapper-icon-dAT").src = iconFullyUrlDAT;
        // Day after 4 days
        // Day after 5 days
        
        
        // Icons hourly
        
        // Hour now
        let iconHourNow = data.hourly[0].weather[0].icon;
        let iconFullyUrlHourNow = iconBaseUrl + iconHourNow + iconFormat;
        document.getElementById(
            "wrapper-icon-hour-now"
            ).src = iconFullyUrlHourNow;
            
            // Hour1
            let iconHour1 = data.hourly[1].weather[0].icon;
            let iconFullyUrlHour1 = iconBaseUrl + iconHour1 + iconFormat;
            document.getElementById("wrapper-icon-hour1").src = iconFullyUrlHour1;
            
            // Hour2
            let iconHour2 = data.hourly[2].weather[0].icon;
            let iconFullyUrlHour2 = iconBaseUrl + iconHour2 + iconFormat;
            document.getElementById("wrapper-icon-hour2").src = iconFullyUrlHour2;
            
            // Hour3
            let iconHour3 = data.hourly[3].weather[0].icon;
            let iconFullyUrlHour3 = iconBaseUrl + iconHour3 + iconFormat;
            document.getElementById("wrapper-icon-hour3").src = iconFullyUrlHour3;
            
            // Hour4
            let iconHour4 = data.hourly[4].weather[0].icon;
            let iconFullyUrlHour4 = iconBaseUrl + iconHour4 + iconFormat;
            document.getElementById("wrapper-icon-hour4").src = iconFullyUrlHour4;
            
            // Hour5
            let iconHour5 = data.hourly[5].weather[0].icon;
            let iconFullyUrlHour5 = iconBaseUrl + iconHour5 + iconFormat;
            document.getElementById("wrapper-icon-hour5").src = iconFullyUrlHour5;

    // Backgrounds
    switch (main) {
      case "Snow":
        document.getElementById("wrapper-bg").style.backgroundImage =
          "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
        break;
      case "Clouds":
        document.getElementById("wrapper-bg").style.backgroundImage =
          "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
        break;
      case "Fog":
        document.getElementById("wrapper-bg").style.backgroundImage =
          "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
        break;
      case "Rain":
        document.getElementById("wrapper-bg").style.backgroundImage =
          "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
        break;
      case "Clear":
        document.getElementById("wrapper-bg").style.backgroundImage =
          "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
        break;
      case "Thunderstorm":
        document.getElementById("wrapper-bg").style.backgroundImage =
          "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
        break;
      default:
        document.getElementById("wrapper-bg").style.backgroundImage =
          "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
        break;
    }
  });

  

