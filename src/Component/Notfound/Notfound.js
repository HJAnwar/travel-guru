import React from 'react';
import { FormControl } from 'react-bootstrap';
import logo from '../../images/Logo.png';

const Notfound = () => {
    return (
        <div style={{height:"800px"}}>
            <nav>
                <img src={logo} style={{ height: "50px", marginLeft: "100px", marginRight: "50px", }} alt="" />
                <FormControl className="searchArea" type="text" placeholder="     Search Your Destination..."></FormControl>
                <a style={{color:'black'}} href="/home">News</a>
                <a style={{color:'black'}} href="/destination">Destination</a>
                <a style={{color:'black'}} href="/blog">Blog</a>
                <a style={{color:'black'}} href="/contact">Contact</a>
                <a style={{color:'black'}} href="/login"><button className="button">Login</button></a>
            </nav>
            <h1 style={{textAlign:'center', color:'red'}}>Not Found Here</h1>
        </div>
    );
};

export default Notfound;