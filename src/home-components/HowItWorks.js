import React from 'react';
import {Link} from 'react-router-dom'
const HowItWorks = () => {
    return (
        <div id="how-it-works-section">
                <div id="h-card">
                    <div id="h-card-content">
                        <h1>Signature dishes, made at home.</h1>
                        <p>Enjoy a customized culinary experience with a Private Chef - all in the comfort of your own home!</p>
                        <Link to="/chefs"><button className="ui red button">Find a Chef</button></Link>
                    </div>
                    <div id="h-card-img">
                        <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"/>
                    </div>
                </div>
        </div>
    );
};

export default HowItWorks;