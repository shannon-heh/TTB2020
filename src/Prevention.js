import Smokey from './smokeybear.svg';
import Cigarettes from './cigarettes.svg';
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
        </div>
    );
}

function Prevention() {
    return (
        <div>
            <header className="Smokey-header">
                <Smokeybear />
                <Cigs />
            </header>
        </div>
    );
}

export default Prevention;