import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <Link className="color"><img src={logo} alt=""/></Link>
                    <Link className="color" to="/home">Home</Link>
                    <Link className="color" to="/booking">Booking</Link>
                    <Link className="color" to="/Login">Log-in</Link>
                    <Link className="color" to="/home">Home</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;