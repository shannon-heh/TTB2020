import React, {useState, useEffect} from 'react';
import NumFire from '../img/fire-icon.svg';
import Land from '../img/land-icon.svg';

export const FireHistory = (props) => {
    function getFireData(county) {
        let fireData = {
            "numFires": 0,
            "acresBurned": 0 
        };
        county.forEach(fire => {
            if(fire["ArchiveYear"] >= 2015) {
                fireData.numFires++;
                fireData.acresBurned += fire["AcresBurned"];
            }
        });
        return fireData;
    }

    let fireData = getFireData(props.county);
    const numFires = fireData.numFires;
    const acresBurned = fireData.acresBurned;

    return( 
        <div id ="fire-data">
            <p>{numFires + " fires"}</p>
            <img src={NumFire} className="fire-icon" alt="fire icon"/>
            <p>{acresBurned + " acres burned"}</p>
            <img src={Land} className="land-icon" alt="land icon"/>
            <p>since 2015</p>
        </div>
    );
}