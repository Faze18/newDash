import React from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import { Redirect } from 'react-router'

import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import LogOut from "./pages/LogOut";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import News from "./pages/News";
import WorkSpace from "./pages/Workspace/index";
import Facebook from "./pages/FacebookLogin";
import { Provider } from './context';


import "./App.css";
var logout = function () {
  sessionStorage.clear();
  
}
const App = () =>

  <Router>
    <div>
      <Nav
        logout={logout}
      />
      <div style={{ height: 50 + "px", backgroundColor: "blue", position: "static" }}></div>
      <Provider>
        <Switch>

          <Route exact path="/home" component={Home} />
          <Route exact path="/logout" component={LogOut} />

          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/news" component={News} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/contacts/add" component={AddContact} />
          <Route exact path="/contacts/edit/:id" component={EditContact} />
          <Route exact path="/workspace" component={WorkSpace} />
          <Route exact path="/" component={Facebook} />
          <Route path="/home/:id" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </Provider>
    </div>
  </Router>;

export default App;


