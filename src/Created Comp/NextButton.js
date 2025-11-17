import React from "react";
function NextButton({ dispatch, answer }) {
  if (answer === null) return null;
  return (
    <div>
      <button className="" onClick={() => dispatch({ type: "nextQuestion" })}>
        Next Question
      </button>
    </div>
  );
}

export default NextButton;
