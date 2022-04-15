import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';




import Nav_dash from './components/Nav_dashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import Users from './pages/Dashboard_admin/Users';
import Livreurs from './pages/Dashboard_admin/Livreurs';
import chefsecteur from './pages/Dashboard_admin/Chef_secteur';





function App() {
  return (
    <>

<BrowserRouter>



<Switch>
  
<Route exact path="/dashboard" component={Nav_dash} />
<Route exact path="/dashboard/Livreurs" component={Livreurs} />
<Route exact path="/dashboard/users" component={Users} />
<Route exact path="/dashboard/chefsecteur" component={chefsecteur} />
<Route exact path="/register" component={Signup} />
<Route exact path="/login" component={Login} />
  
</Switch>

</BrowserRouter>

    </>
  );
}

export default App;
