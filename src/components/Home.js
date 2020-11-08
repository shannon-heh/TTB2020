import React from 'react'
import FireIntro from './img/california.jpg';
import Glacier from './img/glacier.jpg';
import ForestFire from './img/wildfire.jpg';

export const Intro = () => {
    return(
        <div id = "overlay">
            <div>
                <img src={FireIntro} id="fire-intro" alt = "fire intro"/>
                <div id = "title">WILDFIRES AND CLIMATE CHANGE</div>
            </div>
        </div>
    )
}

export const Descriptions = () => {
    return(
        <div id = "desc">
            <div id = "climate-change">
                <img src={Glacier} id="glacier" alt = "climate change"/>
                <div id = "glacier-text"> Since the pre-industrial era (1880-1990), the global average 
                surface temperature has increased by two degrees, indicating a significant increase in accumulated heat. 
                All this extra heat is increasing regional and seasonal temperature extremes and speeding up the melting of 
                the snow cover and glaciers. These increasing temperatures are also driving more extreme weather patterns, such as 
                heavier rainfall, and deep freezes. In 2019, record high temperatures were recorded across all continents, and 9 of 
                the 10 warmest years ever have occurred in the years since 2005. 
                </div>
            </div>
            <div id = "forest-fire">
                <img src={ForestFire} id="fire" alt = "forst fires"/>
                <div id = "fire-text"> 	Higher temperatures and harsh drought have increased the probability of 
                wildfire in places like California and Australia. Hot air pulls water and moisture, which means that 
                forests and vegetation are dried out in these conditions. Even brief heat waves can sufficiently dry out 
                vegetation, leaving lots of dry, burnable tinder. These dry conditions mixed with harsh wind mean that the 
                smallest spark can quickly ignite a fire, that is then quickly fanned and spread by the wind. Increasing 
                temperatures due to climate change have increased these dry spells, spurring larger and more intense wildfires. 
                </div>
            </div>
        </div>
    )
}