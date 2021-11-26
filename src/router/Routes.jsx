import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Home from "../components/home/Home";

const Routes = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
};

export default Routes;
