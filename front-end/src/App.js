import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';




import Nav_dash from './components/Admin/Nav_dashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import Users from './pages/Dashboard_admin/Users';
import Livreurs from './pages/Dashboard_admin/Livreurs';
import chefsecteur from './pages/Dashboard_admin/Chef_secteur';
import Profile from './pages/Dashboard_admin/Profile'
import Restaurants from './pages/Dashboard_admin/Restaurants'
import Commandes from './pages/Dashboard_admin/Commandes'
import CMD from './pages/Dashboard_admin/Assigned_cmd'
import Dashboard from './pages/Dashboard_admin/Dash_content'
import DashboardLivreur from './pages/dashboard_livreur/My-command'
import LivreurCommandes from './pages/dashboard_livreur/LivreurCommandes'
import assigned_livreur from  './pages/dashboard_livreur/home'








function App() {
  return (
    <div className="App">

<BrowserRouter>



<Switch>

   {/* admin */}
  
<Route exact path="/dashboard" component={Dashboard} />
<Route exact path="/dashboard/Livreurs" component={Livreurs} />
<Route exact path="/dashboard/users" component={Users} />
<Route exact path="/dashboard/chefsecteur" component={chefsecteur} />
<Route exact path="/dashboard/profile" component={Profile} />
<Route exact path="/dashboard/restaurants" component={Restaurants} />
<Route exact path="/dashboard/commandes" component={Commandes} />
<Route exact path="/dashboard/assigned_commandes" component={CMD} />

  {/* Livreurs */}


<Route exact path="/livreur/dashboard" component={DashboardLivreur} />
<Route exact path="/livreur/commandes" component={LivreurCommandes} />
<Route exact path="/livreur/assigned" component={assigned_livreur} />






<Route exact path="/register" component={Signup} />
<Route exact path="/login" component={Login} />
  
</Switch>

</BrowserRouter>

    </div>
  );
}

export default App;
