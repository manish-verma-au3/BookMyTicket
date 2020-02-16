import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import LandingPage from './LandingPage/LandingPage'
import Movies from "../pages/Movies/Movies";
import Sports from "../pages/Sports/Sports";
import Events from "../pages/Events/Events";
import Buzz from "../pages/Buzz/Buzz";


class App extends React.Component {

  doRedirect(){
      let loggedIn = localStorage.getItem("user");

      if(loggedIn){
          return <Redirect to='/movies'/>
      }else{
          return <Redirect to='/login'/>                        
      }
  }
  render(){
     
      return (
          <Router>
              <Switch>
              <Route path="/login" component={LandingPage}/>
              <Route path='/movies' component={Movies}/>
              <Route path="/sports" component={Sports} />
              <Route path="/events" component={Events} />
              <Route path="/buzz" component={Buzz} />
               {this.doRedirect()}
               </Switch>
          </Router>
      )
  }
}

export default App
