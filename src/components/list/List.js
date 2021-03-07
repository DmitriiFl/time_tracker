import React from "react";
import { connect } from "react-redux";
import { DELETE_TIMER, PLAY_TIMER, PAUSE_TIMER } from "../../store/actions";

const List = ({ timers, onDeleteTimer, onPlayTimer, onPauseTimer }) => {
  return (
    <div className="list">
      <ul>
        {timers.map((timer, index) => (
          <li key={index} className={timer.isActive ? "active" : ""}>
            <div className="timer-name">{timer.name}</div>
            <div className="timer-time">{timer.time}</div>
            <div className="timer-controls">
              {timer.isActive ? (
                <button
                  onClick={() => onPauseTimer(timer.name)}
                  className="pause"
                />
              ) : (
                <button
                  onClick={() => onPlayTimer(timer.name)}
                  className="play"
                />
              )}
              <button className="remove" onClick={() => onDeleteTimer(timer)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ timers }) => ({ timers });
const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteTimer: (timer) => dispatch({ type: DELETE_TIMER, timer }),
    onPlayTimer: (name) => dispatch({ type: PLAY_TIMER, name }),
    onPauseTimer: (name) => dispatch({ type: PAUSE_TIMER, name }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
