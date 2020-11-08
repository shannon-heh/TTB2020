import Smokey from './smokeybear.svg';
import Cigarettes from './cigarettes.svg';
import Fireworkssvg from './fireworks.svg';
import Lawnmowersvg from './lawnmower.svg';
import Campfiresvg from './campfire.svg';
import Flowerpot from './flowers.svg';
import Phonecall from './phonecall.svg';
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
        <div className="Cigarettes">
            <img src={Cigarettes} className="Cigarettes-logo" alt="Cigarettes Logo" />
            <div className="overlay">
                <div class="text">Cigarettes</div>
            </div>
        </div>
    );
}

const Fireworks = () => {
    return (
        <div className="Fireworks">
            <img src={Fireworkssvg} className="Fireworks-logo" alt="Fireworks Logo" />
            <div className="overlay">
                <div class="text">Fireworks</div>
            </div>
        </div>
    );
}

const Lawnmower = () => {
    return (
        <div className="Lawnmower">
            <img src={Lawnmowersvg} className="Lawnmower-logo" alt="Lawnmower Logo" />
            <div className="overlay">
                <div class="text">Lawnmower</div>
            </div>
        </div>
    );
}

const Campfire = () => {
    return (
        <div className="Campfire">
            <img src={Campfiresvg} className="Campfire-logo" alt="Campfire Logo" />
            <div className="overlay">
                <div class="text">Campfire</div>
            </div>
        </div>
    );
}

const Flowers = () => {
    return (
        <div className="Flowers">
            <img src={Flowerpot} className="Flowers-logo" alt="Flowers Logo" />
            <div className="overlay">
                <div class="text">Flowers</div>
            </div>
        </div>
    );
}

const Phone = () => {
    return (
        <div className="Phone">
            <img src={Phonecall} className="Phone-logo" alt="Phone Logo" />
            <div className="overlay">
                <div class="text">Phone</div>
            </div>
        </div>
    );
}

function Prevention() {
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