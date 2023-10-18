import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "./authSlice";

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
  //! OLD WAY DEPRECATED
  // extraReducers: {
  //   [logOut]: (state, action) => {
  //     // console.log("LOGGEDOUT");//TESTING
  //     state.value = action.payload;
  //     // console.log(action);//TESTING
  //   },
  // },
  //* NEW WAY
  extraReducers: (builder) => {
    builder.addCase(logOut, (state, action) => {
      state.value = action.payload;
    });
  },
});

export default counterSlice.reducer;
export const { increase, decrease } = counterSlice.actions;
