import React, {useState, useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { FireHistory } from './FireHistory.js';
import { WeatherHistory } from './WeatherHistory.js';
import { Carousel } from 'react-responsive-carousel';
import 'chart.js'

const c = {
    FIRES_SONOMA: 0,
    FIRES_BUTTE: 1,
    FIRES_NAPA: 2,
    WEATHER_SONOMA: 3,
    WEATHER_BUTTE: 4,
    WEATHER_NAPA: 5
};

const axios = require('axios');

export const History = () => {
    const [data,setData]=useState([]);
    const [carousel,setCarousel]=useState(false);

    const getData = () => {
        const url = 'http://localhost:3001/';
        const firesUrl = url + 'fires?Counties=';
        const counties = ["Sonoma", "Butte", "Napa"];

        const sonomaUrl = url + 'sonoma_year';
        const butteUrl = url + 'butte_year';
        const napaUrl = url + 'napa_year';

        const queries = counties.map(county => axios.get(firesUrl+county));
        queries.push(axios.get(sonomaUrl));
        queries.push(axios.get(butteUrl));
        queries.push(axios.get(napaUrl))

        let temp = [];

        axios.all(queries)
        .then(resArr => {
            temp = resArr.map(resArr => resArr.data);
            setData(temp);
            setCarousel(true);
        });
    };

    useEffect(()=>{
        getData();
    },[]);

    return( 
        <>
        {carousel && (
        <Carousel>
            <div class = "county-history">
                <FireHistory county = {data[c.FIRES_SONOMA]} />
                <WeatherHistory county = {data[c.WEATHER_SONOMA]} />
            </div>
            <div class = "county-history">
                <FireHistory county = {data[c.FIRES_BUTTE]} />
                <WeatherHistory county = {data[c.WEATHER_BUTTE]} />
            </div>
            <div class = "county-history">
                <FireHistory county = {data[c.FIRES_NAPA]} />
                <WeatherHistory county = {data[c.WEATHER_NAPA]} />
            </div>
        </Carousel>
        )}
        </>
    );
}