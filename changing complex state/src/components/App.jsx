import React, { useState } from "react";

function App() {
  const [fullname, newnamechange] = useState({
    fname: " ",
    lname: " "
  });

  function namechange(event) {
    const valname = event.target.value;
    const nam = event.target.name;

    newnamechange((prevname) => {
      if (nam === "fName") {
        return {
          fname: valname,
          lanme: prevname.lname
        };
      } else if (nam === "lName") {
        return {
          fname: prevname.fname,
          lname: valname
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullname.fname} {fullname.lname}
      </h1>
      <form>
        <input
          onChange={namechange}
          name="fName"
          placeholder="First Name"
          value={fullname.fname}
        />
        <input
          onChange={namechange}
          name="lName"
          placeholder="Last Name"
          value={fullname.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
