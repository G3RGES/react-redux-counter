import React from "react";
import { useDispatch, useSelector } from "react-redux";
// ACTIONS
import { increase, decrease } from "../store/counterSlice";
import { logIn, logOut } from "../store/authSlice";
export default function Counter() {
  const globalState = useSelector((state) => {
    // console.log(state);//TESTING
    return state;
  });
  const dispatch = useDispatch();
  const isLoggedIn = () => {
    return globalState.auth.isLoggedIn;
  };
  const loginHandler = (status) => {
    // console.log(status);//TESTING
    if (status) {
      dispatch(logOut());
    } else {
      dispatch(logIn());
    }
  };
  // //* ONE WAY TO DO IT
  // const globalState = useSelector((state) => state);

  // const counterOperation = useCallback(
  //   (type, payload) => {
  //     dispatch({ type, payload });
  //   },
  //   [dispatch]
  // );
  // //* ANOTHER WAY
  // //   const counterState = useSelector((state) => {
  // //     return state.value;
  // //   });
  // useEffect(() => counterOperation("increase", 1), [counterOperation]);

  // //   const counter = useSelector((state) => {
  // //     return state.counter;
  // //   });

  // // const handleCounterValue = (value) => {
  // //   if (value < 1) {
  // //     return "no number";
  // //   }
  // // return value
  // // }

  // const increase = () => {
  //   dispatch({
  //     type: "increase",
  //     payload: 1,
  //   });
  // };
  // const decrease = () => {
  //   dispatch({
  //     type: "decrease",
  //     payload: 1,
  //   });
  // };
  // const toggleCounter = () => {
  //   dispatch({ type: "toggleCounter" });
  // };

  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      {/* {globalState.counter && ( */}
      {isLoggedIn() && (
        <>
          <div className="counter">
            Counter:
            {globalState.counter.value}
          </div>
          <div>
            <button
              className="btn"
              onClick={() => dispatch(increase(4))}
              // onClick={increase}
            >
              increase +
            </button>
            <button
              className="btn"
              onClick={() => dispatch(decrease(2))}
              // onClick={decrease}
            >
              decrease -
            </button>
          </div>
        </>
      )}

      {/* )} */}
      <div>
        {/* <button
          className="btn"
          // onClick={toggleCounter}
        >
          Hide/Show Counter Number
        </button> */}
        {/* SAME AS HIDE/SHOW BUT AS AN AUTH LOGING/LOGOUT */}
        <button className="btn" onClick={() => loginHandler(isLoggedIn())}>
          {" "}
          {isLoggedIn() ? "logout" : "login"}{" "}
        </button>
      </div>
    </div>
  );
}
