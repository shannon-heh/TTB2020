import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import Rain from './img/rain.svg';
import Risk from './img/risk.svg';
import Temp from './img/temp.svg';
import windSpeed from './img/wind-speed.svg';

const axios = require('axios');

const MONTH_INDEX = 6;
const DATA_UNAVAILABLE = "Data unavailable";
const KELVIN_MULT = 9/5;
const KELVIN_CONST = -459.67;
const RISK = {
    NODATA: "Sorry, we don't have enough data to make predictions today.",
    NONE: "Yay, no risk of fire!",
    LITTLE: "It is unlikely that there is a fire in your area, but beware of higher temperatures, stronger winds, and drier conditions.",
    MEDIUM: "Beware of potential fires in your area! Stay up to date with local forecasts for further info.",
    HIGH: "There is very likely a fire in your area! Please read our Community section for help in preparing."
}

export const Prediction = () => {
    const [weather,setWeather]=useState({});
    const [history, setHistory]=useState({});
    const [riskLevel, setLevel] = useState("");
    const [prediction,setPrediction]=useState(false);
    const {register, handleSubmit} = useForm();

    const fetchPrediction = () => {
        let riskFactor = 0;
        let numValid = 0;;
        if(history["temp"] !== DATA_UNAVAILABLE) {
            numValid++;
            if(weather["temp"] >= history["temp"] - 10) 
                riskFactor++;
        }
        if(history["prcp"] !== DATA_UNAVAILABLE) {
            numValid++;
            if(weather["prcp"] <= history["prcp"] + 2) 
                riskFactor++;
        }
        if(history["wind"] !== DATA_UNAVAILABLE) {
            numValid++;
            if(weather["wind"] >= history["wind"] - 1) 
                riskFactor++;
        }
        if(numValid == 0) setLevel(RISK.NODATA);
        else if(riskFactor == 3) setLevel(RISK.HIGH);
        else if(riskFactor == 2) setLevel(RISK.MEDIUM);
        else if(riskFactor == 1) setLevel(RISK.LITTLE);
        else if(riskFactor == 0) setLevel(RISK.NONE);
        console.log(riskLevel);

    }

    const onSubmit = data => { 
        const lat = data.latitude;
        const lon = data.longitude;
        const apikey = '4442842ee5abc16c9caa8989d5335c42';
        const owmUrl = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+apikey;                     
        axios.get(owmUrl)
        .then(res => {
            const weatherData = res.data;
            const currWeather = {
                "temp": 0,
                "wind": 0,
                "type": ""
            }
            currWeather["temp"] = (KELVIN_MULT*weatherData.main.temp+KELVIN_CONST).toFixed(2);
            currWeather["wind"] = weatherData.wind.speed;
            currWeather["type"] = weatherData.weather[0].main;
            setWeather(currWeather);
        });
        const historyUrl = 'http://localhost:3001/weather_month?LATITUDE='+lat+'&LONGITUDE='+lon;
        console.log(historyUrl);
        axios.get(historyUrl)
        .then(res => {
            let maxTemp = 0, prcp = 0, wind = 0;
            let numTemp = 0, numPrcp = 0, numWind = 0;
            let avgTemp = -1, avgPrcp = -1, avgWind = -1;
            res.data.forEach(entry => {
                const month = entry["DATE"].charAt(MONTH_INDEX);
                if(month >= 6 && month <= 9) {
                    if(entry["EMXT"] !== ("")) {
                        maxTemp += entry["EMXT"];
                        numTemp++;
                    }
                    if(entry["PRCP"] !== ("")) {
                        prcp += entry["PRCP"];
                        numPrcp++;
                    }
                    if(entry["WSF2"] !== ("")) {
                        wind += entry["WSF2"];
                        numWind++;
                    }
                }
            });
            if(numTemp > 1) avgTemp = maxTemp/numTemp;
            else avgTemp = DATA_UNAVAILABLE;
            if(numPrcp > 1) avgPrcp = prcp/numPrcp;
            else avgPrcp = DATA_UNAVAILABLE;
            if(wind > 1) avgWind = wind/numWind;
            else avgWind = DATA_UNAVAILABLE;
            setHistory({
                "temp": avgTemp, 
                "prcp": avgPrcp, 
                "wind": avgWind}
            );
            setPrediction(true);
        });
        fetchPrediction();
    };

    return (
        <div id="prediction">  
            <div><h3 id="enter-coords">Enter your coordinates! </h3></div>
            <form id="form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input id="input" name="latitude" placeholder="Your Latitude" ref={register} 
                        style={{height:"2em", width: "16em"}}/>
                    <input id="input" name="longitude" placeholder="Your Longitude" ref={register} 
                        style={{height:"2em", width: "16em"}}/>
                    <input id="submit" type="submit" placeholder="Enter" value = "Enter" 
                        style={{height:"2.5em", width: "8em"}}/>
                </div>
            </form>
            {prediction && (
                <div id = "boxes">
                    <div id = "status-box">
                        <img src={Risk} className="risk-icon" alt="risk icon"/>
                        <p>Risk Assessment</p>
                        <p>{riskLevel}</p>
                    </div>
                    <div id = "temperature-box">
                        <img src={Temp} className="temp-icon" alt="temp icon"/>
                        <p>Temperature</p>
                        <p>Current: {weather["temp"]}</p>
                        <p>Average Max: {history["temp"]}</p>
                    </div>
                    <div id = "wind-box">
                        <img src={windSpeed} className="wind-icon" alt="wind icon"/>
                        <p>Wind Speed</p>
                        <p>Current: {weather["wind"]}</p>
                        <p>Average Max: {history["wind"]}</p>
                    </div>
                    <div id = "rain-box">
                        <img src={Rain} className="rain-icon" alt="rain icon"/>
                        <p>Weather</p>
                        <p>Current: {weather["type"]}</p>
                        <p>Average Precip: {history["prcp"]}</p>
                    </div>
                </div>
            )
            }
        </div>
    );
}