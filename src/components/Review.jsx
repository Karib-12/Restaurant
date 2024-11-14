import React from "react";
import ReactPlayer from 'react-player';
import './Review.css';
import design1 from './Image/design1.png';
import person from './Image/person.png';
import tomato from './Image/tomato.png';
// import leef from './Image/leef.png';

class Review extends React.Component {
    render () {
        return (
            <div id="blog" className="frame5">
                <img src={tomato} alt="tomato" className="tomato" />
                {/* <img src={leef} alt="leef" className="leef" /> */}
                <div>
                    <li>Crispy, Every Bite Taste</li>
                    <h1>What Some of my Customers Say</h1>
                    <div className="review-block">
                        <div className="review">
                            <h1>“</h1>
                            <div className="review-post">
                                <p>You can&apos;t go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                                <div className="reviewer">
                                    <div>
                                        <p>Khalid Al Dawsry</p>
                                        <p>Jeddah, Saudi</p>
                                    </div>
                                    <div className="reviewer-photo">
                                        <img src={person} alt="person" className="person" />
                                    </div>
                                </div>
                            </div>
                            <img src={design1} alt="design1" className="design1" />
                        </div>
                        <ReactPlayer url="https://www.youtube.com/shorts/0Tz2_OBtJ8E" controls width="100%" height="1erm" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Review;