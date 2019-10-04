import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch,Route} from "react-router-dom";

import AppNavbar from './components/AppNavbar'
import Login from './components/Login'
import Register from './components/Register'
import LandList from './components/LandList'
import PropertyDetails from './components/details/PropertyDetails'
import UserList from './components/UserList'
import LandListAdmin from './components/LandListAdmin'
import BidListCustomer from './components/BidListCustomer'
import Land from './components/Land'
import Detail from './components/details/Detail'


class App extends Component {
    render() {
        return ( 
       <React.Fragment>
            <AppNavbar/>
            <Switch>
                 
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route path="/userList" component={UserList} />
                  <Route path="/propertyDetails" component={PropertyDetails} />
                  <Route path="/landListAdmin" component={LandListAdmin} />
                  <Route path="/bidListCustomer" component={BidListCustomer} />
                  <Route path="/land" component={Land} />
                  <Route path="/detail/:id" component={Detail} />
                  
                  <Route exact path="/" component={LandList} />
              </Switch>
        </React.Fragment>
        );
    }
}

export default App;