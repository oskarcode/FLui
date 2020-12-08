import React, { Component } from "react";
import ReactDOM from "react-dom";
import List from './pages/List';

function App() {
  return (
    <List></List>
  );

};


ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept()
}