import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store";
export default function Counter() {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const { increase, decrease } = counterAction;
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
      <>
        <div className="counter">
          Counter:
          {globalState.value}
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
      {/* )} */}
      <div>
        <button
          className="btn"
          // onClick={toggleCounter}
        >
          Hide/Show Counter Number
        </button>
      </div>
    </div>
  );
}
