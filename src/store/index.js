import { createStore } from "redux";

const initState = {
  value: 0,
  counter: true,
};

const counterReducer = (state = initState, action) => {
  if (action.type === "increase") {
    return { ...state, value: state.value + action.payload };
  }
  if (action.type === "decrease") {
    return { ...state, value: state.value - action.payload };
  }
  if (action.type === "toggleCounter") {
    // console.log("on");//TESTING
    return { ...state, counter: !state.counter };
  }
  // console.log(action);//TESTING
  return state;
};

// APP INITIATE => store -> counterReducer -> 0
const store = createStore(counterReducer);

export default store;
