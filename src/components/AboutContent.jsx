import React from "react";

class AboutContent extends React.Component {
    render () {
        const h1Style = {
            // fontFamily: "Bebas Neue",
            fontSize: "2.4rem",
            fontWeight: "700",
            lineHeight: "2.2rem",
            textAlign: "left",
            color: "#181818"
        };
        const pStyle = {
            fontSize: "1rem"
        };
        
        return (
            <div className="about-content"> 
                {/* <h1>EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD</h1> */}
                    <h1 style={h1Style}>EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD</h1>
                <p style={pStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.
                </p>
            </div>
        );
    }
}

export default AboutContent;