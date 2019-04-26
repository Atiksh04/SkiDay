import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MainComponent} from './mainComponent.js';
import {NotFound} from './notComponent.js';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Member} from './menber.jsx'
import {MemberList} from './memberList.js'

class App extends Component {
  render() {
     return(
    <Router>
    <Switch>
   	<Route path="/" component={MainComponent}/>
   	<Route path="/listday" component={MainComponent}/>
    <Route path="/add-day" component={MainComponent}/>
    <Route path="/listday/powder" component={MainComponent}/>
    <Route path="/listday/backcountry" component={MainComponent}/>
    </Switch>
   	</Router>
   
   );
    }
    
}

export default App;
