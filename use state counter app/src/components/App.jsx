import React ,{useState} from "react";

function App() {
  const [count,setCount] = useState(1)

  function increase(){
    setCount(count+1);
  }

  function decrease(){
    setCount(count-1)
  }
  function multiply(){
    setCount(count*3)
  }
  function divide(){
    setCount(count/3)
  }

  return (
    <div className="container">
    <h1>{count}</h1>
    <button onClick = {decrease} >-</button>
    <button onClick = {increase} >+</button>
    <button onClick = {multiply} >*</button>
    <button onClick = {divide}   >/</button>
  </div>
  );
}

export default App;
