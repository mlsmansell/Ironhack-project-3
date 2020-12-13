import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React, { Component } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Navigation from "./layout/Navigation/Navigation";
import ArtistList from "./pages/Artists-list/Artists-list";
import ArtistDetails from "./pages/Artist-details/Artist-details";
import ArtistForm from "./pages/Artist-form/Artist-form";
import DetailsForm from "./pages/Artist-details/Details-form";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

import AuthServices from "./../service/auth.service";

class App extends Component {
  constructor() {
    super();
    this.state = { loggedInUser: undefined };
    this.authServices = new AuthServices();
  }

  componentDidMount = () => {
    this.authServices
      .isLoggedIn()
      .then((response) => this.setTheUser(response.data))
      .catch((err) => this.setTheUser(undefined));
  };

  refreshUser() {
    this.authServices
      .isLoggedIn()
      .then((response) => this.setTheUser(response.data))
      .catch((err) => this.setTheUser(undefined));
  }

  setTheUser = (user) =>
    this.setState({ loggedInUser: user }, () =>
      console.log("Nuevo estado de App:", this.state)
    );

  render() {
    return (
      <>
        <Navigation
          {...this.props}
          storeUser={this.setTheUser}
          loggedUser={this.state.loggedInUser}
        />

        <main>
          <Switch>
            <Route path="/artists" exact render={(props) => (<ArtistList {...props} loggedUser={this.state.loggedInUser} />)} />
            <Route path="/artists/:artist_id" exact render={(props) => (<ArtistDetails {...props} loggedUser={this.state.loggedInUser} />)} />
            <Route path="/create" render={() => <ArtistForm />} />
            <Route path="/edit/:artist_id" exact render={(props) => <DetailsForm {...props} />} />
            <Route path="/signup" render={(props) => (<Signup storeUser={this.setTheUser} {...props} loggedUser={this.state.loggedInUser} />)} />
            <Route path="/login" render={(props) => (<Login storeUser={this.setTheUser} {...props} />)} />
            <Route path="/profile" render={() => this.state.loggedInUser ? (<Profile refreshUser={() => this.refreshUser()} loggedUser={this.state.loggedInUser} />) : (<Redirect to="/signup" />)} />
            <Route path="/" render={(props) => (<Home {...props} loggedUser={this.state.loggedInUser} />)} />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;