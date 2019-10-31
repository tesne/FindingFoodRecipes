import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import styles from "./styles.css";

/*function App() {
  return (
    <div className="App">
      <h1>Food Recipes With React JS</h1>
      <h2>An App for food recipes built with ReactJS</h2>
      <p>This App uses an external API to find recipes</p>
    </div>
  );
}*/

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
