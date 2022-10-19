import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function changedValue(event) {
    const nam = event.target.name;
    const valname = event.target.value;

    setContact((prev) => {
      if (nam === "fName") {
        return {
          fName: valname,
          lName: prev.lName,
          email: prev.email
        };
      } else if (nam === "lName") {
        return {
          fName: prev.fName,
          lName: valname,
          email: prev.email
        };
      } else if (nam === "email") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          email: valname
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={changedValue}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={changedValue}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={changedValue}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
