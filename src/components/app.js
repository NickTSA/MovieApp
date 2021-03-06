import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles.css";

import NavBar from "./navBar";
import Index from "./index";
import SearchPage from "./searchPage";
import MoviePage from "./moviePage";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/:page" component={Index} />
            <Route exact path="/Movies/:id" component={MoviePage} />
            <Route exact path="/Search/:query/:page" component={SearchPage} />
            <Route exact path="/Search/:query" component={SearchPage} />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
