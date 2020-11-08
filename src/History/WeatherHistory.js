import React from 'react';
import { LineChart } from 'react-chartkick'

export const WeatherHistory = (props) => {
    function getWeatherData(county) {
        let data = [[], []];
        let prevCity = "";
        let currCity = "";
        let currIndex =  -1;
        console.log(county);
        county.forEach(obj => {
            let currCity = obj["NAME"];
            let dateProp = obj["DATE"];
            let maxtemp = obj["EMXT"];
            let precip = obj["PRCP"];
            if(prevCity.localeCompare(currCity) !== 0) {
                let tempObj  = {"name": "", "data": {}};
                let precipObj  = {"name": "", "data": {}};
                tempObj.name = currCity;
                precipObj.name = currCity;
                tempObj.data = {[dateProp]: maxtemp};
                precipObj.data = {[dateProp]: precip}
                data[0].push(tempObj);
                data[1].push(precipObj);
                currIndex++;
            }
            else {
                data[0][currIndex].data.[dateProp] = maxtemp;
                data[1][currIndex].data.[dateProp] = precip;
            }
            prevCity = currCity;
        });
        return data;
    }

    return(
        <div class = "weather-charts">
            <LineChart id = "temp-precip-chart" 
            data = {getWeatherData(props.county)[0]} 
            legend={false} 
            min = {70} max = {115}
            width = "100%" height = "100%"
            />
            <LineChart id = "temp-precip-chart" 
            data = {getWeatherData(props.county)[1]} 
            legend={false} 
            min = {0} max = {80}
            width = "100%" height = "100%"
            />
        </div>
);

}