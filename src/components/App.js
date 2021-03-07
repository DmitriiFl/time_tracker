import React, { Component } from "react";

import "../styles/App.css";
import Input from "./input/Input";
import List from "./list/List";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>tracker</h1>
        <Input />
        <List />
      </div>
    );
  }
}

export default App;
