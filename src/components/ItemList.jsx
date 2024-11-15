import React from "react";
import './ItemList.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import burgur from './Image/burgur.png';
import pizza0 from './Image/pizza0.png';
import fry from './Image/fry.png';
import chicken from './Image/chicken.png';
import sideimage from './Image/sideimage.png';

const items = [ 
    { 
        name: "Vegetables Burger", 
        description: "Barbecue Italian cuisine burger", 
        image: burgur 
    }, 
    { 
        name: "Spacial Pizza", 
        description: "Barbecue Italian cuisine pizza", 
        image: pizza0 
    }, 
    { 
        name: "Spacial French Fries", 
        description: "Barbecue Italian cuisine", 
        image: fry
    }, 
    { 
        name: "Cuisine Chicken", 
        description: "Japanese cuisine chicken", 
        image: chicken
    } 
]; 

const responsive = { 
    superLargeDesktop: { 
        breakpoint: { max: 4000, min: 3000 }, 
        items: 5 
    }, 
    desktop: { 
        breakpoint: { max: 3000, min: 1024 }, 
        items: 4 
    }, 
    tablet: { 
        breakpoint: { max: 1024, min: 464 }, 
        items: 3 
    }, 
    mobile: { 
        breakpoint: { max: 464, min: 0 }, 
        items: 1 
    } 
};

class ItemList extends React.Component {
    render () {
        return (
            <div className="Product">
                <div className="item-des">
                    <div className="content1">
                        <p>Crispy, Every Bite Taste</p>
                        <h4>POPULAR FOOD ITEMS</h4>
                    </div>
                </div>
                <div className="Item">
                    <Carousel responsive={responsive} 
                        infinite={true} 
                        autoPlay={true} 
                        autoPlaySpeed={2500} 
                        keyBoardControl={true} 
                        containerClass="carousel-container" 
                        removeArrowOnDeviceType={["tablet", "mobile"]} 
                        dotListClass="custom-dot-list-style" 
                        itemClass="carousel-item-padding-40-px" > 
                            {items.map((item, index) => ( 
                                <div key={index} className="item">
                                    <img src={item.image} alt={item.name} />
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                                ))
                            }
                    </Carousel>
                </div>
                <div className="sideimg-box">
                    <img src={sideimage} alt="sideimg" className="sideimg" />
                </div>
            </div>
        );
    }
}

export default ItemList;