import * as actionTypes from "./actions";

const initialState = {
  inputValue: "",
  timers: [
    {
      name: "No name tracker #1",
      isActive: true,
      time: "00:00:00",
    },
    {
      name: "No name tracker #2",
      isActive: false,
      time: "01:32:27",
    },
    {
      name: "No name tracker #3",
      isActive: false,
      time: "25:11:03",
    },
  ],
};

export const reducer = (store = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TIMER:
      return {
        ...store,
        timers: [
          {
            name: store.inputValue.trim() ? store.inputValue : Date.now(),
            isActive: true,
            time: "00:00:00",
          },
          ...store.timers,
        ],
      };
    case actionTypes.INPUT_CHANGE: {
      return {
        ...store,
        inputValue: action.name,
      };
    }
    case actionTypes.DELETE_TIMER:
      return {
        ...store,
        timers: store.timers.filter((i) => i !== action.timer),
      };
    case actionTypes.PAUSE_TIMER:
      return {
        ...store,
        timers: store.timers.map((item) =>
          item.name === action.name
            ? { ...item, isActive: !item.isActive }
            : item
        ),
      };
    case actionTypes.PLAY_TIMER:
      return {
        ...store,
        timers: store.timers.map((item) =>
          item.name === action.name
            ? { ...item, isActive: !item.isActive }
            : item
        ),
      };
    default:
      return store;
  }
};
