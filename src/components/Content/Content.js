import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import Topbar from "./Topbar";
import { Users } from "../Views/Users/Users";
import { Dashboard } from "../Views/Home/Dashboard"
import {internalserver} from '../../assets/utilities/errores/500_page'

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>

      {/* <Route exact path="/" component={() => "Hello"} /> */}
      <Route exact path="/about" component={() => "About"} />
      <Route exact path="/Pages" component={() => "Pages"} />
      <Route exact path="/faq" component={() => "FAQ"} />
      <Route exact path="/contact" component={() => "Contact"} />
      <Route exact path="/Home-1" component={() => "Home-1"} />
      <Route exact path="/Home-2" component={() => "Home-2"} />
      <Route exact path="/Home-3" component={() => "Home-3"} />
      {/* <Route exact path="/Edit" component={() => "Usuarios"} /> */}
      <Route exact path="/Page-2" component={() => "Page-2"} />
      <Route exact path='/home' component={Dashboard} />
      <Route exact path="/home/dashboard" component={Dashboard} />
      {/* <Route exact path="/" component={Login} /> */}
      {/* <Route exact path="/login" component={Login} /> */}
      <Route exact path='/home/users' component={Users} />
      <Route exact path='/home/users/500page' component={internalserver} />
      <Route exact path="/page-1" component={() => "page-1"} />
      <Route exact path="/page-2" component={() => "page-2"} />
      <Route exact path="/page-3" component={() => "page-3"} />
      <Route exact path="/page-4" component={() => "page-4"} />
    </Switch>
  </Container>
);

export default Content;
