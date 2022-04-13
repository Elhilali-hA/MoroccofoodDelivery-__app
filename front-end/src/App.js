import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav_dash from './components/Nav_dashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

<BrowserRouter>



<Switch>
  
<Route exact path="/dashboard" component={Nav_dash} />
    <Route exact path="/register" component={Signup} />
    <Route exact path="/login" component={Login} />
  
      </Switch>

</BrowserRouter>

    </div>
  );
}

export default App;
