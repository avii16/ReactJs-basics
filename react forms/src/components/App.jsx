import React, { useState } from "react";

function App() {
  const [headingname, setheadingname] = useState("");
  const [headingtext, setheadingtext] = useState("");

  function whensubmit(event) {
    setheadingname(event.target.value);
    // console.log(event.target.value)
  }
  function whensubmitbutton(event) {
    setheadingtext(headingname);
    event.preventDefault();
  }
  return (
    <div className="container">
      <form onClick={whensubmitbutton}>
        <h1>Hello {headingtext}</h1>
        <input
          onChange={whensubmit}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
