import { useReducer } from "react";

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + action.payload + state.step };
    case "dec":
      return { ...state, count: state.count - action.payload - state.step };
    case "define":
      return action.value;
    case "setStep":
      return { ...state, step: action.payload.payload };
    case "reset":
      return { count: 0, step: 1 };
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

function DateCounter() {
  //const [count, setCount] = useState(0);
  const intialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, intialState);
  const { count, step } = state;
  //const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec", payload: 0 });
    // setCount((count) => count - 1);
    //setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: "inc", payload: 0 });
    // setCount((count) => count + 1);
    //setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "define", payload: Number(e.target.value) });
    //setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    dispatch({
      type: "setStep",
      payload: { payload: Number(e.target.value) },
    });
    //setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({ type: "reset" });
    //setCount(0);
    //setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
