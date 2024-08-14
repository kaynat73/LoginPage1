import React from 'react';
import './App.css';
import LoginPage from './pages/login/loginPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
       <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
         
        </Switch>
    </Router>
  
  );
}

export default App;
