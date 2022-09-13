import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Movies from "./Component/movies";
import NotFound from "./Component/notFound";
import Customers from "./Component/customers";
import Rentals from "./Component/rentals";
import NavBar from "./Component/navbar";
import MovieForm from './Component/movieForm';
import LoginForm from './Component/loginForm';
import RegisterForm from "./Component/registerForm";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
