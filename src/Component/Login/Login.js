import React, { useContext, useState } from 'react';
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

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: ''

    });

    const handleBlur = (e) => {

        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }

        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setLoggedInUser(newUserInfo);
                  
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log('sign in user info', res.user);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setLoggedInUser(newUserInfo);

                });
        }
        e.preventDefault();
    }

    
    return (
        <header className="body">
            <nav className='loginNav'>
                <img src={logo} style={{ height: "50px", marginLeft: "100px", marginRight: "50px", }} alt="" />
                <FormControl className="searchArea" type="text" placeholder="     Search Your Destination..."></FormControl>
                <a href="/home">News</a>
                <a href="/destination">Destination</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
                <a href="/login"><button className="button">Login</button></a>
                <p>{loggedInUser.name}</p>
            </nav>
            

            <form className='login-box' onSubmit={handleSubmit}>
                
                {newUser && 
                <div className='textbox'>
                    <input onBlur={handleBlur} name="name" type="text" placeholder="first-name" />
                </div>
                }
                
                <br />
                <div className='textbox'>
                    <input onBlur={handleBlur} type="text" name='email' placeholder="email address" required />
                </div>
                <br />
                <div className='textbox'>
                    <input onBlur={handleBlur} type="password" name="password" id="" placeholder="password" required />
                </div>
                <br />
                <input className="btn" type="submit" value={newUser ? 'Sign up' : 'Sign In'} />
                <div className="newSign">
                    <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                    <label htmlFor="">New User Sign up</label>
                </div>
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