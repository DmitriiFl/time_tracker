import React from "react";
import { connect } from "react-redux";
import { INPUT_CHANGE, ADD_TIMER } from "../../store/actions";

const Input = ({ inputValue, onInputChange, onAddTimer }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter tracker name"
        value={inputValue}
        onChange={(event) => onInputChange(event.target.value)}
      />
      <button id="create-timer" onClick={onAddTimer} />
    </div>
  );
};
const mapStateToProps = ({ inputValue }) => ({ inputValue });
const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (value) => dispatch({ type: INPUT_CHANGE, name: value }),
    onAddTimer: () => dispatch({ type: ADD_TIMER }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Input);
