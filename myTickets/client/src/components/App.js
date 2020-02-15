import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
//import TestApi from './TestApi';
import LandingPage from './LandingPage/LandingPage'
import Home from './Pages/Home/Home';
import Poster from './Movie-slider/poster';

class App extends React.Component {

  doRedirect(){
      let loggedIn = localStorage.getItem("user");

      if(loggedIn){
          return <Redirect to='/home'/>
      }else{
          return <Redirect to='/login'/>                        
      }
  }
  render(){
     
      return (
          <Router>
              <Route path="/home" component={Home}/>
              <Route path="/login" component={LandingPage}/>
               {this.doRedirect()}
          </Router>
      )
  }
}

export default App
