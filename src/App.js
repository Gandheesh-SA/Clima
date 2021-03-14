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
            <h1>{weather.data.name}</h1>
            </div>
            };
        </div>
    )
}

export default App;

