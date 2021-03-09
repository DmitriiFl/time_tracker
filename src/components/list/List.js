import React from "react";
import { connect } from "react-redux";
import {
  DELETE_TIMER,
  PLAY_TIMER,
  PAUSE_TIMER,
  UPGRADE_TIMER,
} from "../../store/actions";
import DateTime from "luxon/src/datetime";

const List = ({
  timers,
  onDeleteTimer,
  onPlayTimer,
  onPauseTimer,
  onSecondPassed,
}) => {
  const formatTime = (time) => {
    let hours = Math.trunc(time / 3600000);
    if (hours < 10) {
      hours = `0${hours}`;
    }
    const minutes = DateTime.fromMillis(time).toFormat("mm");
    const seconds = DateTime.fromMillis(time).toFormat("ss");
    return `${hours}:${minutes}:${seconds}`;
  };
  setTimeout(onSecondPassed, 1000);
  return (
    <div className="list">
      <ul>
        {timers.map((timer, index) => (
          <li key={index} className={timer.isActive ? "active" : ""}>
            <div className="timer-name">{timer.name}</div>
            <div className="timer-time">{formatTime(timer.countTime)}</div>
            <div className="timer-controls">
              {timer.isActive ? (
                <button onClick={() => onPauseTimer(timer)} className="pause" />
              ) : (
                <button onClick={() => onPlayTimer(timer)} className="play" />
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
    onPlayTimer: (timer) => dispatch({ type: PLAY_TIMER, timer }),
    onPauseTimer: (timer) => dispatch({ type: PAUSE_TIMER, timer }),
    onSecondPassed: () => dispatch({ type: UPGRADE_TIMER }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
