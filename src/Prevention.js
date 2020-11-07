import Smokey from './smokeybear.svg';
import Cigarettes from './cigarettes.svg';
import Fireworkssvg from './fireworks.svg';
import Lawnmowersvg from './lawnmower.svg';
import Campfiresvg from './campfire.svg';
import Flowerpot from './flowers.svg';
import Phonecall from './phonecall.svg';
import {useState} from 'react';
import './Prevention.css'

const Smokeybear = () => {
    return (
        <div className="Smokey">
            <img src={Smokey} className="Smokey-logo" alt="Smokey Logo" />
        </div>
    );
}

const Cigs = () => {
    return (
        <div className="RowOneElems">
            <img src={Cigarettes} className="RowOneElems-logo" alt="RowOneElems Logo" />
        </div>
    );
}

const Fireworks = () => {
    return (
        <div className="RowOneElems">
            <img src={Fireworkssvg} className="RowOneElems-logo" alt="RowOneElems Logo" />
        </div>
    );
}

const Lawnmower = () => {
    return (
        <div className="RowTwoElems">
            <img src={Lawnmowersvg} className="RowTwoElems-logo" alt="RowTwoElems Logo" />
        </div>
    );
}

const Campfire = () => {
    return (
        <div className="RowTwoElems">
            <img src={Campfiresvg} className="RowTwoElems-logo" alt="RowTwoElems Logo" />
        </div>
    );
}

const Flowers = () => {
    return (
        <div className="RowOneElems">
            <img src={Flowerpot} className="RowOneElems-logo" alt="RowOneElems Logo" />
        </div>
    );
}

const Phone = () => {
    return (
        <div className="RowOneElems">
            <img src={Phonecall} className="RowOneElems-logo" alt="RowOneElems Logo" />
        </div>
    );
}

function Prevention() {
    //const [isShown, setIsShown] = useState(false);

    // const imageShown = () => {
    //     <button 
    //         onMouseEnter={() => setIsShown(true)}
    //         onMouseLeave={() => setIsShown(false)}

    // }

    return (
        <div>
            <header className="RowZero-header">
                <Flowers />
                <Phone />
            </header>
            <header className="RowOne-header">
                <Fireworks />
                <Smokeybear />
                <Cigs />
            </header>
            <header className="RowTwo-header">
                <Lawnmower />
                <Campfire />
            </header>
        </div>
    );
}

export default Prevention;