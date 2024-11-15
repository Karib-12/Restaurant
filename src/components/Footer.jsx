import React from "react";
import './Footer.css';
import { FiPhoneCall, FiClock } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareInstagram  } from "react-icons/fa6";


class Footer extends React.Component {
    render () {
        return (
            <div id="footer" className="frame6">
                <div className="footer-background">
                    <div className="footer">
                        <h1>We ready to have you the best dining experiences</h1>
                        <div className="footer-card">
                            <div className="boxcard">
                                <div>
                                    <FiClock className="icon"/>
                                    <h2>Opening hours</h2>
                                    <p>Monday - Sunday</p>
                                    <p>9:00 AM to 11:30 PM</p>
                                </div>
                            </div>
                            <div className="boxcard">
                                <div>
                                    <FiPhoneCall className="icon"/>
                                    <h2 >LET&apos;S TALK</h2>
                                    <p>Phone: 1-800-222-4545</p>
                                    <p>Fax: 1-800-222-4545</p>
                                </div>
                            </div>
                            <div className="boxcard">
                                <div>
                                    <MdMailOutline className="icon"/>
                                    <h2>BOOK A TABLE</h2>
                                    <p>Email: demo@website.com</p>
                                    <p>Support: support@website.com</p>
                                </div>
                            </div>
                            <div className="boxcard">
                                <div>
                                    <GrLocation className="icon"/>
                                    <h2>Our Address</h2>
                                    <p>123 Stree New York City,</p>
                                    <p>United States Of America.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="links">
                        <div className="link-icon">
                            <FaFacebook className="Faicon"/>
                            <FaSquareXTwitter className="Faicon"/>
                            <FaSquareInstagram className="Faicon"/>
                            <FaLinkedin className="Faicon"/>
                        </div>
                        <p>© 2023 All Rights Reserved </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;