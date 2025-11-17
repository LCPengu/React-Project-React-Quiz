import React from "react";

function Progress({ i, numQuestions, points, maxPoints }) {
  return (
    <header className="progress">
      <p>
        Question <strong>{i}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;
