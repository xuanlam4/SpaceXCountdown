import React from "react";
import Menu from "./components/Layout/Menu";
import Home from "./components/Layout/Home";
import Dump from "./components/Layout/DUmps";
import Footer from "./components/Layout/Footer";
import PastLaunch from "./components/Launch/PastLaunch";
import FutureLaunch from "./components/Launch/FutureLaunch";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Menu></Menu>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/future" component={FutureLaunch}></Route>
          <Route exact path="/past" component={PastLaunch}></Route>
        </Switch>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
