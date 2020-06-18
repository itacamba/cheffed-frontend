import React from 'react';

const HowIcons = () => {
    return (
        <div id="h-icons-section">
            <h1>How it works</h1>
            <div id="h-icons">
                <div className="h-icon">
                    <div>
                        <img alt="icon" src="../../signup.png"/>
                    </div>
                    <p>Sign Up!</p>
                </div>
                <div className="h-icon">
                    <div>
                        <img alt="icon" src="../../fidnchef.png"/>
                    </div>
                    
                    <p>Choose your cuisine and find a chef.</p>
                </div>
                <div className="h-icon">
                    <div>
                        <img alt="icon" src="../../sendrequest.png"/>
                    </div>
                    <p>Send in your request and wait for acceptance</p>
                </div>
                <div className="h-icon">
                    <div>
                        <img alt="icon" src="../../plate.png"/>
                    </div>
                    <p>Enjoy your warm meal cooked at home.</p>
                </div>
            </div>
        </div>
    );
};

export default HowIcons;