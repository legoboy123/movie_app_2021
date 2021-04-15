import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Start from "./routes/Start";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      {/* <Navigation /> */}
      <Route path="/" exact={true} component={Start} />
      <Route path="/home" exact={true} component={Home} />
    </HashRouter>
  );
}

export default App;
