import * as actionTypes from "./actions";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../services/localStorageData";
import { DateTime } from "luxon";

const initialState = getFromLocalStorage();

export const reducer = (store = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TIMER: {
      const result = {
        ...store,
        timers: [
          {
            name: store.inputValue.trim()
              ? store.inputValue
              : DateTime.now().toLocaleString(
                  DateTime.DATETIME_MED_WITH_SECONDS
                ),
            lastStartTime: Date.now(),
            countTime: 0,
            isActive: true,
          },
          ...store.timers,
        ],
        inputValue: "",
      };
      setToLocalStorage(result);
      return result;
    }
    case actionTypes.INPUT_CHANGE:
      return {
        ...store,
        inputValue: action.name,
      };
    case actionTypes.DELETE_TIMER: {
      const result = {
        ...store,
        timers: store.timers.filter((i) => i !== action.timer),
      };
      setToLocalStorage(result);
      return result;
    }
    case actionTypes.PAUSE_TIMER: {
      const result = {
        ...store,
        timers: store.timers.map((item) =>
          item === action.timer
            ? {
                ...item,
                isActive: !item.isActive,
                countTime: item.countTime + (Date.now() - item.lastStartTime),
                lastStartTime: 0,
              }
            : item
        ),
      };
      setToLocalStorage(result);
      return result;
    }
    case actionTypes.PLAY_TIMER: {
      const result = {
        ...store,
        timers: store.timers.map((item) =>
          item === action.timer
            ? {
                ...item,
                isActive: !item.isActive,
                lastStartTime: Date.now(),
              }
            : item
        ),
      };
      setToLocalStorage(result);
      return result;
    }
    case actionTypes.UPGRADE_TIMER:
      const date = Date.now();
      const result = {
        ...store,
        timers: store.timers.map((item) => {
          if (item.isActive) {
            return {
              ...item,
              countTime: item.countTime + (date - item.lastStartTime),
              lastStartTime: date,
            };
          }
          return item;
        }),
      };
      setToLocalStorage(result);
      return result;
    default:
      return store;
  }
};
