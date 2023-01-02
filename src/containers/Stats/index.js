import './index.css';
import Header from "../../components/Header";

const Stats = ({ aos }) => {
    return (
        <section data-aos={aos} className='stats-section' id='statistics'>
            <Header label={'04.'} title={"Technical Analysis"} />

            <div className='stats-center'>
                <div>
                    <div className='stat-container time-stat'>
                        <figure className='stat-item'><embed src="https://wakatime.com/share/@LaxAce/f2de2a57-7295-411f-a1a7-904e2c48da57.svg"></embed></figure>
                    </div>
                    <div className='stat-container'>
                        <figure className='stat-item'><embed src="https://wakatime.com/share/@LaxAce/2253aa8c-86b8-43ef-81e5-82463c8399fd.svg"></embed></figure>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stats;
