import { createSlice, createStore } from "@reduxjs/toolkit";

const initState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state, action) => {
      state.value -= action.payload;
    },
  },
});
export const counterAction = counterSlice.actions;

const store = createStore(counterSlice.reducer);

// const counterReducer = (state = initState, action) => {
//   if (action.type === "increase") {
//     return { ...state, value: state.value + action.payload };
//   }
//   if (action.type === "decrease") {
//     return { ...state, value: state.value - action.payload };
//   }
//   if (action.type === "toggleCounter") {
//     // console.log("on");//TESTING
//     return { ...state, counter: !state.counter };
//   }
//   // console.log(action);//TESTING
//   return state;
// };

// APP INITIATE => store -> counterReducer -> 0
// const store = createStore(counterReducer);

export default store;
