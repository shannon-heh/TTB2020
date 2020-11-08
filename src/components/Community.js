import Paradisegif from './img/wildfire2.gif';

const Paradise = () => {
    return (
        <div id="gif" className="Community">
            <img src={Paradisegif} className="Community-icon" alt="Paradise man" />
            <div id="text"className="Community">Police body-cam footage of people fleeing the Camp Fire on foot</div>
        </div>
    );
}
export function Community() {
    return (
        <div id='community-title'>
            COMMUNITY
            <div id='aboutus-body'>
                Aside from scientific analysis of these wildfires, it is also important to
                examine the human cost of these destructive wildfires. We wanted to share just a few
                of the stories from these horrific tragedies:
            </div>
            <div><Paradise /></div>
            <ul id='community-bullet'>
                <li>
                    The Camp Fire in 2018, which was the deadliest and most destructive wildfire in all of California
                    burned over 153,336 acres and killed 85 civilians, and destroyed the livelihoods of
                    tens of thousands of people as profiled in this <a href="https://www.theguardian.com/environment/2018/dec/20/last-day-in-paradise-california-deadliest-fire-untold-story-survivors">article</a>.
                </li>
                <li>
                    <a href="https://apnews.com/article/wildfires-fires-weather-california-archive-b9ae4f4a3a849e4af7db204d5ff1730e">Another fire</a> of
                    similar size to the Camp Fire in the same county in Berry Creek just this year also drove
                    people from their homes and burned hundreds of thousands of acres was just one of many fires that
                    combined to burn an area of land the size of Connecticut in California.
                </li>
            </ul>
            <div id='aboutus-body'>
                We are also including some additional resources for people who may be in at-risk areas so that they
                may be able to best prepare in the event that they have to evacuate their home:
            </div>
            <ul id='community-bullet'>
                <li>
                    <a href="https://www.readyforwildfire.org/prepare-for-wildfire/get-set/wildfire-action-plan/">CALFire Prepare for Wildfire Guide</a> 
                </li>
                <li>
                    <a href="https://www.ready.gov/wildfires#prepare">Ready.gov Wildfire Preparation Plan</a>
                </li>
                <li>
                    <a href="https://www.fire.ca.gov/incidents/">CALFire Official Fire Map</a>
                </li>
            </ul>
        </div>
    );
}
