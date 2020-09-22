import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import Fb from '../../images/fb.png';
import Google from '../../images/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { FormControl } from 'react-bootstrap';
import logo from '../../images/Logo.png';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location= useLocation();
    const { from } = location.state || { from: {pathname:"/" }}
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handleFbLogin = () => {
        if (firebase.apps.length === 0) {
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
        }
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
            
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

    }
    
    const handleGoogleLogin = () => {

        if (firebase.apps.length === 0) {
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
        }
        
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    const handleResetPassword= email => {
        var auth = firebase.auth();
        
        auth.sendPasswordResetEmail(email).then(function() {
        // Email sent.
        }).catch(function(error) {
        // An error happened.
});
    }

    const handleBlur = (event) => {

        console.log(event.target.value);
    }
    const handleSubmit= () => {

    }
    return (
        <header className="body">
            <nav>
                <img src={logo} style={{ height: "50px", marginLeft: "100px", marginRight: "50px", }} alt="" />
                <FormControl className="searchArea" type="text" placeholder="     Search Your Destination..."></FormControl>
                <a href="/news">News</a>
                <a href="/destination">Destination</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
                <a href="/login"><button className="button">Login</button></a>
                <p>{loggedInUser.name}</p>
            </nav>
            <form onSubmit={handleSubmit} className="login-box">
              <h2>Login</h2>

                <div className='textbox'>
                    <input name='email' onBlur={handleBlur} type="text" placeholder='Username or email'/>
                </div>

                <div className='textbox'>
                    <input name='password'  onBlur={handleBlur} type="password" name='' placeholder='Password'/>
                </div>

                <div style={{display:"flex"}}>
                    <input style={{marginTop:"5px"}} type="checkbox" /><label htmlFor="">remember me</label>
                    <small onClick={handleResetPassword} style={{color:'red', marginLeft:'50px'}}>forget password</small>
                </div>

                    <input className='btn' type="button" value='Login'/>
                    <small style={{marginLeft:"50px"}}>Don't have account?<Link to="/signup" style={{color:'red'}}>create an account</Link></small>

            </form>
            <br/>
            <br/>
            
            <div  className="login">
                <small style={{display:"flex"}}><hr/>Or<hr/></small>

                <div onClick={handleFbLogin} className="loginbtn">
                    <img  src={Fb} alt=""/>
                    <p>Continue with Facebook</p>
                </div>

                <div  onClick={handleGoogleLogin} className="loginbtn">
                    
                    <img  src={Google} alt=""/>
                    <p >Continue with Google</p>
                    
                </div>
            </div>
           
        
        </header>
            
    );
};

export default Login;