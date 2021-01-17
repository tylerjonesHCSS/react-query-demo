import { BrowserRouter as Router, Route } from "react-router-dom";
import * as React from "react";
import "./styles.css";
import Layout from "./Layout";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/">
          <Layout />
        </Route>
      </div>
    </Router>
  );
}
