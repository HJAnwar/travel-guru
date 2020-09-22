import React from 'react';
import './Signin.css'
import { Link } from 'react-router-dom';
import Fb from '../../images/fb.png';
import Google from '../../images/google.png';
import { FormControl } from 'react-bootstrap';
import logo from '../../images/Logo.png';


const Signin = () => {
    return (
        <header className='body'>
            <nav>
                <img src={logo} style={{ height: "50px", marginLeft: "100px", marginRight: "50px", }} alt="" />
                <FormControl className="searchArea" type="text" placeholder="     Search Your Destination..."></FormControl>
                <a href="/news">News</a>
                <a href="/destination">Destination</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
                <a href="/login"><button className="button">Login</button></a>
            </nav>
        <div className="login-box">
            <h2>Create Account</h2>

            <div className='textbox'>
                <input type="text" placeholder='First name'/>
            </div>

            <div className='textbox'>
                <input type="text" placeholder='Last name'/>
            </div>

            <div className='textbox'>
                <input type="text" placeholder='Email'/>
            </div>

            <div className='textbox'>
                <input type="password" name='' placeholder='Password'/>
            </div>

            <div className='textbox'>
                <input type="password" name='' placeholder='Recape Password'/>
            </div>

            <input className='btn' type="button" value='Sign-in'/>
            <small style={{marginLeft:"50px"}}>You have account?<Link to="/login" style={{color:'red'}}>Log-in</Link></small>
            
        </div>
        
        <div  className="loginarea">
            <small style={{display:"flex"}}><hr/>Or<hr/></small>

            <div className="loginbtn">
                <img  src={Fb} alt=""/>
                <p >Continue with Facebook</p>
            </div>

            <div  className="loginbtn">
                <img  src={Google} alt=""/>
                <p >Continue with Google</p>
            </div>
        </div>
    
    </header>
    );
};

export default Signin;