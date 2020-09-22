import React from 'react';
import './Home.css';
import  'react-bootstrap';
import sajek from '../../images/Sajek.png';
import sreemongol from '../../images/Sreemongol.png';
import sundorbon from '../../images/sundorbon.png';
import { Link } from 'react-router-dom';
import { FormControl } from 'react-bootstrap';
import logo from '../../images/Logo.png';



const Home = () => {
    return (
        <div className='home'>
            <nav>
                <img src={logo} style={{ height: "50px", marginLeft: "100px", marginRight: "50px", }} alt="" />
                <FormControl className="searchArea" type="text" placeholder="     Search Your Destination..."></FormControl>
                <a href="/home">News</a>
                <a href="/destination">Destination</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
                <a href="/login"><button className="button">Login</button></a>
            </nav>
                
            <Link to="/booking">
            <div className="nameimg">
                <div className="home-box">
                    <img src={sajek}  alt=""/>
                </div>
                <div className="home-box">
                    <img src={sreemongol} alt=""/>
                </div>
                <div className="home-box"> 
                    <img src={sundorbon} alt=""/>
                </div>
            </div>
        </Link>
        </div>
    );
};

export default Home;