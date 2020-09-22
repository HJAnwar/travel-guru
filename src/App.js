import React, { createContext, useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import Home from './Component/Home/Home';
import Booking from './Component/Booking/Booking';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Roomdetail from './Component/Roomdetail/Roomdetail';
import Notfound from './Component/Notfound/Notfound';
import Footer from './Component/Footer/Footer';


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
   <Router>
    
     <Switch>
       <Route path="/home">
          <Home/>
       </Route>
       <Route path="/booking">
          <Booking/>
       </Route>
       <Route path="/login">
         <Login></Login>
       </Route>
       <PrivateRoute path="/roomdetail">
         <Roomdetail></Roomdetail>
       </PrivateRoute>
       <Route exact path="/">
          <Home/>
       </Route>
       <Route path="*">
          <Notfound></Notfound>
       </Route>
     </Switch>
     <Footer></Footer>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
