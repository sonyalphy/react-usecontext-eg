import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Main from "./components/Main";

export const UserContext = createContext();

function App() {
  return (
    <div className="App">
      <h4>useContext</h4>
      <Main />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <UserContext.Provider value={"Esten"}>
    <App />
  </UserContext.Provider>,
  rootElement
);
