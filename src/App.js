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
import Signin from './Component/Signin/Signin';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Roomdetail from './Component/Roomdetail/Roomdetail';


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
       <Route path="/signup">
          <Signin></Signin>
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
          
       </Route>
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
