import { useState } from 'react';
import Search from './components/SearchButton';
import InfoBox from './components/infoBox';


export default function WeatherApp() {
    let [weatherinfo, setWeatherInfo] = useState({
        city: "",
        temp: "",
        temp_max: "",
        temp_min: "",
        humidity: "",
        feelsLike: "",
        weather: ""
    });
    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return (
        <div>
            <Search updateInfo={updateInfo}/>
            <InfoBox info={weatherinfo} />
        </div>
    );
}