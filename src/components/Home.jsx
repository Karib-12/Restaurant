import React from "react";
import './Home.css';
import image1 from './Image/image1.png';
import offer from './Image/offer.png';
import vector from './Image/Vector.png'

class Home extends React.Component {
    render () {
        return (
            <div id="home" className="home">
                <div className="card">
                    <div className="box">
                        <div className="head">
                            <div className="ractangle">
                                <div className="title">Taste the authentic Saudi cuisine</div>
                            </div>
                            <div className="subtitle">Among the best Saudi chefs in the world, serving you something beyond flavor. </div>
                        </div>
                        <button className="btn">Explore Menu</button>
                    </div>
                    <div className="img-box">
                        <img src={vector} alt="vector" className="vector"/>
                        <img src={image1} alt="image1" className="image1" />
                        <img src={offer} alt="offer" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;