import React from "react";
import './About.css';
import sideimage from './Image/sideimage.png';
import dining from './Image/dining.png';
import delivery from './Image/delivery.png';
import pickup from './Image/pickup.png';
import MarketPlace from './Image/Market-Place.png';
import picture from './Image/picture.png';
import { MdOutlinePhoneInTalk } from "react-icons/md";
// import AboutContent from "./AboutContent";


class About extends React.Component {
    render () {
        return (
            <div id="about">
                <div className="about">
                    <div className="about1">
                        <div className="marketplace">
                            <img src={picture} alt="picture" className="picture" />
                            <img src={MarketPlace} alt="MarketPlace" className="Market-Place" />
                        </div>
                        <div className="dummy">
                            <ul className="dummy-nav">
                                <li><a href="#about" onClick={() => setSection('about')}>About</a></li>
                                <li><a href="#experience" onClick={() => setSection('experience')}>Experience</a></li>
                                <li><a href="#contact" onClick={() => setSection('contact')}>Contact</a></li>
                            </ul>
                            <div className="dummy-content">
                                {/* <AboutContent /> */}
                                <div className="about-content"> 
                                    <h1>EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.
                                    </p>
                                </div>
                                <div className="content">
                                    <button className="about-more">ABOUT MORE</button>
                                    <div className="contact">
                                        <span><MdOutlinePhoneInTalk className="phone-icon"/></span>
                                        <span className="number">+880 1345 346432</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="side-image">
                        <img src={sideimage} alt="sideimage" className="sideimage" />
                    </div>
                    <div className="about2">
                        <div className="card1">
                            <img src={delivery} alt="delivery" className="delivery"/>
                            <div className="delivery-card">
                                <h2 className="delivery-title">FAST DELIVERY</h2>
                                <p className="delivery-subtitle">Within 30 minutes</p>
                            </div>
                        </div>
                        <div className="card1">
                            <img src={dining} alt="dining" className="dining" />
                            <div className="dining-card">
                                <h2 className="dining-title">ABSOLUTE DINING</h2>
                                <p className="dining-subtitle">Best buffet restaurant</p>
                            </div>
                        </div>
                        <div className="card1">
                            <img src={pickup} alt="pickup" className="pickup" />
                            <div className="pickup-card">
                                <h2 className="pickup-title">PICKUP DELIVERY</h2>
                                <p className="pickup-subtitle">Grab your food order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;