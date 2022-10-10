import React from "react";
import Login from "./Login";
var isLogedIn = true;

// function RenderConditional() {
//   if (isLogedIn === true) {
//     return (
//     <div>
//       <h1>Hello User Welcome</h1>
//     </div>
//       );
//   } else {
//     return (
//       <Login />
//     );
//   }
// }

//ternairy operator
// className="container">{ isLogedIn===true ? <h1>Welcome</h1> : <Login />

// we can also use &&

function App() {
  return (
    <div className="container">
      {isLogedIn === true ? <h1>Welcome</h1> : <Login />}
    </div>
  );
}

export default App;
