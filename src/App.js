import React from "react";
import Menu from "./components/Layout/Menu";
import Home from "./components/Layout/Home";
import Footer from "./components/Layout/Footer";
import Launch from "./components/Launch/Launch";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Menu></Menu>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/:timearea/:page" component={Launch}></Route>
          <Redirect from="/:timearea" to="/:timearea/1"></Redirect>
        </Switch>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
