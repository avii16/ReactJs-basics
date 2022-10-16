import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hello World");

  const [handlemouseover, setmouseover] = useState(false);

  function submit() {
    setHeading("Welcome User");
  }

  function ismouseOver() {
    setmouseover(true);
  }

  function ismouseOut() {
    setmouseover(false);
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={submit}
        onMouseOver={ismouseOver}
        onMouseOut={ismouseOut}
        style={{ backgroundColor: handlemouseover ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
