import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchButton.css"
import { useState } from 'react';

export default function Search({updateInfo}) {
    let [city,setCity]=useState("");
    const API_KEY="ec62b1f21ff0b58943f67db997c02bc1";
    const URL="https://api.openweathermap.org/data/2.5/weather?";
    let serachWheater=async ()=>{
        let response=await fetch(`${URL}q=${city}&appid=${API_KEY}&units=metric`);
        let data=await response.json();
        let result={
            city:city,
            temp:data.main.temp,
            temp_max:data.main.temp_max,
            temp_min:data.main.temp_min,
            humidity:data.main.humidity,
            feelsLike:data.main.feels_like,
            weather:data.weather[0].description
        }
        console.log("Data: ",result);
        return result
    }
    const onChangeCity=(event)=>{
        setCity(event.target.value);
        console.log(event.target.value)
    }
    const searchCity=async (event)=>{
        event.preventDefault();
        console.log("here is ",city);
        setCity("");
        let res=await serachWheater();
        updateInfo(res);
    }
        return (
        <div className='Search'>
            <h3>Find the Weather of Any location!</h3>
            <form onSubmit={searchCity} >
                <TextField id="outlined-basic" label="Enter location" value={city} variant="outlined" onChange={onChangeCity} />
                <br /><br />
                <Button variant="contained" type='submit' >Search</Button>
            </form>
        </div>
    )
}