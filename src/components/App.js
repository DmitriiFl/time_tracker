import React, { useEffect } from "react";
import "../styles/App.css";
import Input from "./input/Input";
import List from "./list/List";
import { UPGRADE_TIMER } from "../store/actions";
import { connect } from "react-redux";

const App = ({ onFirstRender }) => {
  useEffect(() => {
    onFirstRender();
  }, []);
  return (
    <div className="container">
      <h1>tracker</h1>
      <Input />
      <List />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFirstRender: () => dispatch({ type: UPGRADE_TIMER }),
  };
};
export default connect(null, mapDispatchToProps)(App);
