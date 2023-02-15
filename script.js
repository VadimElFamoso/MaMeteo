const city_name = document.getElementById("city");
const weather = document.getElementById("weather");
const temperature = document.getElementById("temperature");

const button = document.getElementById("geolocation");

city_name.innerHTML = "Nancy";

    const weatherIndex = {
        0: "Ciel dégagé",
        1: "Quasiment dégagé",
        2: "Légèrement nuageux",
        3: "Couvert",
        45: "Brouillard",
        48: "Brouillard givrant",
        51: "Légère pluie fine",
        53 : "Pluie fine modérée",
        55: "Pluie fine dense",
        56: "Légère pluie verglaçante",
        57: "Forte pluie verglaçante",
        61: "Pluie faible",
        63: "Pluie modérée",
        65: "Forte pluie",
        66: "Légère pluie verglaçante", //!
        67: "Forte pluie verglaçante", //!
        71: "Faible neige",
        73: "Neige modérée",
        75: "Forte neige",
        77: "Chutes de neige",
        80: "Légères averses",
        81: "Averses modérées",
        82: "Fortes averses",
        85: "Averses de neige modérées",
        86: "Forte averses de neige",
        95: "Orage",
        96: "Orage avec grêle modéré",
        99: "Orage avec forte grêle"
    }

    button.addEventListener("click", function(){
        function userGeolocation(){
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                fetch(APIurl(lat, lon, convertStampDate(new Date)))
                .then(response => response.json())
                .then((data) => {   
                    console.log(data);
                    let currentTemperature = Math.round(data.hourly.temperature_2m[getNearestDate()]);
                    let currentWeatherCode = data.hourly.weathercode[getNearestDate()];
                    let currentWeather = weatherIndex[currentWeatherCode];
            
                    //On applique les valeurs récupérées dans le DOM : 
                    temperature.innerHTML = currentTemperature + "°C"
                    weather.innerHTML = currentWeather;

                })
            })
        }
        userGeolocation(); 
        getNearestDate(); 
    })
          
        function APIurl(lat, lon, date){
            console.log(lat);
            console.log(lon);
            console.log(date);
            return url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&hourly=temperature_2m,weathercode&start_date=" + date + "&end_date=" + date;
        }

        function convertStampDate(unixtimestamp){   
            var convertedDate = new Date(unixtimestamp).toISOString().slice(0, 10);
            return convertedDate;
        }

        function getNearestDate(){
            var currentTime = new Date;
            var currentHour = currentTime.getHours();
            return currentHour;
        }