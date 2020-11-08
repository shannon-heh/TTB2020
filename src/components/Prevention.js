import Smokey from './img/smokeybear.svg';
import Cigarettes from './img/cigarettes.svg';
import Fireworkssvg from './img/fireworks.svg';
import Lawnmowersvg from './img/lawnmower.svg';
import Campfiresvg from './img/campfire.svg';
import Flowerpot from './img/flowers.svg';
import Phonecall from './img/phonecall.svg';
import '../css/Prevention.css'

const Smokeybear = () => {
    return (
        <div className="Smokey">
            <img src={Smokey} className="Smokey-logo" alt="Smokey logo" />
            <div className="Smokey-text">Smokey says only you can prevent wildfires!</div>
        </div>
    );
}

const Cigs = () => {
    return (
        <div className="icon">
            <img src={Cigarettes} className="indiv-pic" alt="indiv pic" />
            <div className="overlay">
                <div class="text">
                    Make sure you dispose of your smoking materials properly.
                    Do not throw them on the ground. Douse them with water and
                    put them in a fireproof container instead.
                </div>
            </div>
        </div>
    );
}

const Fireworks = () => {
    return (
        <div className="icon">
            <img src={Fireworkssvg} className="indiv-pic" alt="indiv pic" />
            <div className="overlay">
                <div class="text">
                    Do not set off pyrotechnics of any kind. Many large
                    wildfires have been started by fireworks or other pyrotechnics,
                    the risk is just too high.
                </div>
            </div>
        </div>
    );
}

const Lawnmower = () => {
    return (
        <div className="icon">
            <img src={Lawnmowersvg} className="indiv-pic" alt="indiv pic" />
            <div className="overlay">
                <div class="text">
                    If you must mow your lawn, it is recommended that you do so when
                    it is early in the day, before 10 am. But avoid mowing your lawn
                    at all when it is too windy or dry, since the mower can easily
                    ignite a flame if it strikes a rock.
                </div>
            </div>
        </div>
    );
}

const Campfire = () => {
    return (
        <div className="icon">
            <img src={Campfiresvg} className="indiv-pic" alt="indiv pic" />
            <div className="overlay">
                <div class="text">
                    Never ever leave your campfire unattended. Before you leave,
                    make sure you douse it with water and wait until it is 
                    completely cool before you leave.
                </div>
            </div>
        </div>
    );
}

const Flowers = () => {
    return (
        <div className="icon">
            <img src={Flowerpot} className="indiv-pic" alt="indiv pic" />
            <div className="overlay">
                <div class="text">
                    Incorporate some fire-resistant plants, such as lavendar, sage,
                    and California fuchsia, onto your property if you have the space.
                    You can also create some defensive space with patios, stone walls, etc. 
                </div>
            </div>
        </div>
    );
}

const Phone = () => {
    return (
        <div id="prevention" className="icon">
            <img src={Phonecall} className="indiv-pic" alt="indiv pic" />
            <div className="overlay">
                <div class="text">
                    Report all unattended fires you see, whether that be an
                    uncontrollable wildfire or a simple campfire. Even
                    the most innocuous flame can grow to be a devastating wildfire
                    under the right conditions.
                </div>
            </div>
        </div>
    );
}

export function Prevention() {
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