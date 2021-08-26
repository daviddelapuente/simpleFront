import React from 'react';
import Navigation from './components/Navigation';
import Login from './views/Login';
import Signup from './views/Signup';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import MyInvitations from './views/MyInvitations';
import NewLink from './views/NewLink';
import NewUserSuccesfull from './views/NewUserSuccesfull';
import './App.css';

function App() {
  return (
    <div className="App">    
      <Navigation/>
      <Switch>
          <Route path='/NewLink' component={NewLink}/>  
          <Route path='/MyInvitations' component={MyInvitations}/>  
          <Route path='/Login' component={Login}/>  
          <Route path='/Signup' component={Signup}/>  
          <Route path='/NewUserSuccesfull' component={NewUserSuccesfull}/>  
          <Route path='/' component={Home}/>            
      </Switch>       
    </div>
  );
}

export default App;
