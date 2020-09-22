import React from 'react';
import './Roomdetail.css';
import img1 from '../../images/Rectangle 26.png';
import img2 from '../../images/Rectangle 27.png';
import img3  from '../../images/Rectangle 28.png';
import { FormControl } from 'react-bootstrap';
import logo from '../../images/Logo.png';


const Roomdetail = () => {
    return (
        <div>
            <nav className='roomdetailNav'>
                <img src={logo} style={{ height: "50px", marginLeft: "100px", marginRight: "50px", }} alt="" />
                <FormControl className="searchArea" type="text" placeholder="     Search Your Destination..."></FormControl>
                <a href="/home">News</a>
                <a href="/destination">Destination</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
                <a href="/login"><button className="button">Login</button></a>
            </nav>
            <div className="room-component">
            <div className='room-img'>
                <img src={img1} alt=""/>
                <br/>
                <img src={img2} alt=""/>
                <br/>
                <img src={img3} alt=""/>
            </div>
            <div className="room-detaile">
                <div className="room-type1">
                    <h1>hot room with ...</h1>
                    <h3>thkhfsl sldkfh sldkfjgh sldkfg sdklgh slkdg slkgh slkgjh slkgj slkgh slgkh slkgh</h3>
                </div>
                <div className="room-type2">
                <h1>hot room with ...</h1>
                    <h3>thkhfsl sldkfh sldkfjgh sldkfg sdklgh slkdg slkgh slkgjh slkgj slkgh slgkh slkgh</h3>
                
                </div>
                <div className="room-type3">
                <h1>hot room with ...</h1>
                    <h3>thkhfsl sldkfh sldkfjgh sldkfg sdklgh slkdg slkgh slkgjh slkgj slkgh slgkh slkgh</h3>
                
                </div>
            </div>
            <div className='google-map'>
                
            </div>
            </div>
           
        </div>
    );
};

export default Roomdetail;