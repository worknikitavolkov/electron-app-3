import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Programs } from "./Programs/Programs";
import { Students } from "./Students/Students";
import { Home } from "./Home/Home";
import { Navbar } from "./Navbar/Navbar";
import { Fragment } from "react";

const App = () => {
  return (
    <Router>
			<Navbar />
      <div className="app">
        <Switch>
          <Route path="/students">
            <Students />
          </Route>
          <Route path="/programs">
            <Programs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
