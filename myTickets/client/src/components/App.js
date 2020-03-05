import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import LandingPage from './LandingPage/LandingPage'
import Movies from "../Pages/Movies/Movies";
import Sports from "../Pages/Sports/Sports";
import Events from "../Pages/Events/Events";
import Buzz from "../Pages/Buzz/Buzz";
import Home from '../Pages/Home/Home'
import Login from '../components/Login-Signup/Login';
import Signup from '../components/Login-Signup/SignUp';
import MovieInfo from '../Pages/MovieInfo/MovieInfo';


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
              <Switch>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup}/>
              <Route path='/home' component={Home}/> 
              <Route path='/movies' component={Movies}/>
              <Route path='/moviesInfo' component={MovieInfo}/>
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
