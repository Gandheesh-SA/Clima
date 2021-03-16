import React, {useState} from 'react'
import { getWeather } from "./weather";
 function App ()  {
    const [search, setSearchField]= useState('');
    const [weather, weatherInfo]=useState({});
    const textChange = (event)=>{
        setSearchField(event.target.value);
        console.log(event.target.value);
    }
    const getSearch = async ()=>{
            var searchData= await getWeather(search);
            console.log(searchData);
            weatherInfo(searchData);
            setSearchField('');
            console.log(weather);
    }
    return (
        <div>
            <input type ="text" onChange={textChange} value={search} placeholder="Enter the name of the city" />
            <button onClick={getSearch}>Search</button>
            {weather.statusText==='OK' &&
            <div>
            <h1>City: {weather.data.name}</h1>
            <h2>Country: {weather.data.sys.country}</h2>
            <h3>{weather.data.main.temp}<sup>o</sup></h3>
            <img src={`http://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`} />
            <p>Desc:{weather.data.weather[0].description}</p>
            <p>Wind Speed: {weather.data.wind.speed}km/hr</p>
            <p>Humidity:{weather.data.main.humidity}</p>
            <p>Air Pressure:{weather.data.main.pressure}PS</p>
            </div>
            }
        </div>
    )
}

export default App;

