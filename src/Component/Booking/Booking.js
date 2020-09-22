import React from 'react';
import { FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Booking.css';
import logo from '../../images/Logo.png'

const Booking = () => {
    return (
        <header className='booking'>
                    <nav>
                        <img src={logo} style={{ height: "50px", marginLeft: "100px", marginRight: "50px", }} alt="" />
                        <FormControl className="searchArea" type="text" placeholder="     Search Your Destination..."></FormControl>
                        <a href="/home">News</a>
                        <a href="/destination">Destination</a>
                        <a href="/blog">Blog</a>
                        <a href="/contact">Contact</a>
                        <a href="/login"><button className="button">Login</button></a>
                    </nav>

                <div  style={{display:"flex"}}>

                        <div style={{width:'50%',height:"1000px"}}>
                                <h1 style={{marginLeft:'10px', marginRight:"10px", marginTop:"10px", color:'white'}}>cox bazar we wait you</h1>
                                <h3 style={{marginLeft:'10px', marginRight:"10px", marginTop:"10px", color:'white'}}>hidjaflk a;lskdjf a;ldsfkj al;sdkjf a;ldkfj al;dfjk al;gkjd sa;ldkjf a;ljk hidjaflk a;lskdjf a;ldsfkj al;sdkjf a;ldkfj al;dfjk al;gkjd sa;ldkjf a;ljk hidjaflk a;lskdjf a;ldsfkj al;sdkjf a;ldkfj al;dfjk al;gkjd sa;ldkjf a;ljk hidjaflk a;lskdjf a;ldsfkj al;sdkjf a;ldkfj al;dfjk al;gkjd sa;ldkjf a;ljk hidjaflk a;lskdjf a;ldsfkj al;sdkjf a;ldkfj al;dfjk al;gkjd sa;ldkjf a;ljk hidjaflk a;lskdjf a;ldsfkj al;sdkjf a;ldkfj al;dfjk al;gkjd sa;ldkjf a;ljk hidjaflk a;lskdjf a;ldsfkj al;sdkjf a;ldkfj al;dfjk al;gkjd sa;ldkjf a;ljk hidjaflk a;lskdjf a;ldsfkj al;sdkjf a;ldkfj al;dfjk al;gkjd sa;ldkjf a;ljk hidjaflk a;lskdjf a;ldsfkj al;sdkjf a;ldkfj al;dfjk al;gkjd sa;ldkjf a;ljk hidjaflk a;lskdjf a;ldsfkj al;sdkjf a;ldkfj al;dfjk al;gkjd sa;ldkjf a;ljk hidjaflk a;lskdjf a;ldsfkj al;sdkjf a;ldkfj al;dfjk al;gkjd sa;ldkjf a;ljk hidjaflk a;lskdjf a;ldsfkj al;sdkjf a;ldkfj al;dfjk al;gkjd sa;ldkjf a;ljk hidjaflk a;lskdjf a;ldsfkj al;sdkjf a;ldkfj al;dfjk al;gkjd sa;ldkjf a;ljk hidjaflk a;lskdjf a;ldsfkj al;sdkjf a;ldkfj al;dfjk al;gkjd sa;ldkjf a;ljk hidjaflk a;lskdjf a;ldsfkj al;sdkjf a;ldkfj al;dfjk al;gkjd sa;ldkjf a;ljk hidjaflk a;lskdjf a;ldsfkj al;sdkjf a;ldkfj al;dfjk al;gkjd sa;ldkjf a;ljk </h3>
                        </div>

                        <div style={{width:'50%'}}>
                            <div className="loginBox">
                                <label>To</label>
                                <div className='textbox'>
                                    <input type="text"/>
                                </div>

                                <label>To</label>
                                <div className='textbox'>
                                    <input type="password" name='' />
                                </div>

                                <div style={{display:"flex"}}>

                                        <label>From</label>
                                        <div className='textbox'>
                                            <input type="text" name=''/>
                                        </div>

                                        <label>To</label>
                                        <div className='textbox'>
                                            <input type="text" name=''/>
                                        </div>
                                </div>
                                        <Link to="/roomdetail"><input className='btn' type="button" value=' go start'/></Link>
                            </div>
                        </div>
                </div>
                    
                    
        </header>
    );
};

export default Booking;