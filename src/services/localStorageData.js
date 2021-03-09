export const setToLocalStorage = (data) =>
  localStorage.setItem("data", JSON.stringify(data));
export const getFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("data")) || initialState;

const initialState = {
  inputValue: "",
  timers: [
    {
      name: "25 hours tracker",
      isActive: true,
      lastStartTime: Date.now(),
      countTime: 3600000 * 25,
    },
  ],
};
