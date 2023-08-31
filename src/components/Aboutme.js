import React from 'react';
import "./Aboutme.scss";
import { Link } from 'react-router-dom';
import ReactJS from "../assets/reactjs.png"
import Nodejs from "../assets/nodejs.png"

const Aboutme = () => {
    return (
        <div className='about'>
            <div className="left">
                <h1>Who Am I?</h1>
                <p>I am web developer. I use HTML, CSS, JavaScript and ReactJS in the client,
                    and Java ,NodeJS in the server</p>
                <Link to="/contact">
                    <button className='btn'>Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={ReactJS} className='img' alt="reactjs" />

                    </div>
                    <div className='img-stack bottom'>
                        <img src={Nodejs} className='img' alt="reactjs" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme