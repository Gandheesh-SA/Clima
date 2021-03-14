import axios from "axios";
const API_KEY='2d498ece887adc367f397bdf74a71149';

export const getWeather = async (search) => {

    const weatherData = await axios.get("https://api.openweathermap.org/data/2.5/weather?q="+search+"&appid="+API_KEY+"&units=metric");
    return weatherData;
};