import "./FooterStyles.scss";

import React from 'react';

import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <p> 346/40 Chu Van An street , 12 ward ,Binh Thanh district</p>
                            <p>Saigon</p>
                        </div>
                    </div>
                    <div className="phone-number">
                        <h4>
                            <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
                            <p>0768436108</p>
                        </h4>
                    </div>
                    <div className="mail">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                            <p>nhatnha20@uef.edu.vn</p>
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About this project</h4>
                    <p>This is me Nhat.I hope the business side will accept me so that I have the opportunity to practice here. I will do my best with the assigned work to make my internship a success. </p>
                    <div className="social-media">
                    <FaFacebook size={30} style={{ color: "white", marginRight: "1rem" }} />
                    <FaGithub size={30} style={{ color: "white", marginRight: "1rem" }} />
                    <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer