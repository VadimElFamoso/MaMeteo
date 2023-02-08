//Idée : Intégrer var lat et lon pour localisation GPS immédiate et météo customisée dans l'URL.
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
        const result_array = [];

        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude; 
            fetch(APIurl(lat, lon))
                .then(response => response.json())
                .then((data) => {
                    console.log(data);
                    getNearestDate(getCurrentTimestamp());

                    function getCurrentTimestamp(){
                        return Date.now();
                    }
                    
                    function getNearestDate(currentDate){
                        for(let i = 0; i <= data.hourly.time.length - 1 ; i++){
                            let result = Math.sqrt((data.hourly.time[i] - currentDate)**2 + (data.hourly.time[i] - currentDate)**2);
                            console.log(result);
                            result_array.push(result);
                            let lowest_value = Math.min.apply(Math, result_array);
                            var lowest_value_key = result_array.indexOf(lowest_value); 
                            console.log(lowest_value_key);
                            
                            
                                                                          
                        }


                    }
                })        
        })      
    })
          
        function APIurl(lat, lon){
            console.log(lat);
            console.log(lon);
            return url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&hourly=temperature_2m,weathercode&timeformat=unixtime"
        }

        function convertStampDate(unixtimestamp){
                
            var months_arr = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
            // Convert timestamp to milliseconds:
            var date = new Date(unixtimestamp);
            // Year:
            var year = date.getFullYear();
            // Month:
            var month = months_arr[date.getMonth()];
            // Day:
            var day = date.getDate();
            // Hours:
            var hours = date.getHours();
            // Minutes:
            var minutes = "0" + date.getMinutes();
            // Seconds:
            var seconds = "0" + date.getSeconds();
            // String for displaying date and time in dd-MM-yyyy h:m:s format:
            var fulldate = day+' '+month+' '+year+' - '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
            
            return fulldate;
            }




           


            


        
   

 



