import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div id="footer-container">
                <div id="footer-content" >
                    <div id="col-1-footer">
                        <div id="footer-logo">Cheffed</div>
                        <div id="footer-button">
                            <p>Interested in becoming a Chef?</p>
                            <button className="ui black button">Sign up</button>
                        </div>
                    </div>
                    <div id="col-2-footer">
                        <div className="box-footer">
                            <a className="darker" href="#">Why Us</a>
                            <a className="darker" href="#">How It Works</a>
                            <a className="darker" href="#">Become a Chef</a>
                            <a className="darker" href="#">Find a Chef</a>
                        </div>
                        <div className="box-footer">
                            <a className="lighter" href="#">Blog</a>
                            <a className="lighter" href="#">Support</a>
                            <a className="lighter" href="#">Reviews</a>
                            <a className="lighter" href="#">FAQs</a>
                            <a className="lighter" href="#">Contact Us</a>
                        </div>
                        <div className="box-footer">
                            
                        </div>
                    </div>
                    <div id="col-3-footer">
                        <div id="terms-of-service">
                            <a className="lighter" href="#">2020 Cheffed</a>
                            <a className="lighter" href="#">Terms of Service</a>
                            <a className="lighter" href="#">Privacy</a>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;