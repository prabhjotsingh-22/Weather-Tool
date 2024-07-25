const apiKey = "f5f9f30d90fe7444a3d429942ac9de77";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputCity = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json()
    console.log(data);

    if(response.status == 404 || response.status == 400){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";


        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".feels").innerHTML= Math.floor(data.main.feels_like) + "°C";
        document.querySelector(".temp").innerHTML= Math.floor(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
        document.querySelector(".wind").innerHTML= data.wind.speed.toFixed(1) + " km/hr";
    
        const condition = data.weather[0].main
        console.log(condition);
    
        if(condition=== "Clouds"){
            weatherIcon.src = "images/cloud-fill.svg"
        }
        else if(condition=== "Rain"){
            weatherIcon.src = "images/cloud-rain-heavy-fill.svg"
        }
        else if(condition=== "Drizzle"){
            weatherIcon.src = "images/cloud-drizzle-fill.svg"
        }
        else if(condition=== "Mist"){
            weatherIcon.src = "images/mist.svg"
        }
        else if(condition=== "Clear"){
            weatherIcon.src = "images/clear.svg"
        }
        else if(condition=== "Snow"){
            weatherIcon.src = "images/snow.svg"
        }
        else if(condition=== "Thunderstorm"){
            weatherIcon.src = "images/cloud-lightning-rain.svg"
        }
        else{
            weatherIcon.src = "images/cloud-fill.svg"
        }
    }

    
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(inputCity.value);
})
inputCity.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(inputCity.value);
    }
})

