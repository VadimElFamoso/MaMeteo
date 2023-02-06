//Idée : Intégrer var lat et lon pour localisation GPS immédiate et météo customisée dans l'URL.
const city_name = document.getElementById("city");
const weather = document.getElementById("weather");
const temperature = document.getElementById("temperature");

city_name.innerHTML = "Nancy";


window.onload = function(){

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

    function getPos(){
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            return lat, lon;
          })   
    }

    console.log(getPos());



}