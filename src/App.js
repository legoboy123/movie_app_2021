import React from "react";
import { HashRouter, Route } from "react-router-dom";
import RealStart from "./routes/RealStart";
import Start from "./routes/Start";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={RealStart} />
      <Route path="/start" exact={true} component={Start} />
    </HashRouter>
  );
}

export default App;
