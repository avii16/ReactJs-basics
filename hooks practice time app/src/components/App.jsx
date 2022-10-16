import React , {useState} from "react";

function App() {
  const now = new Date().toLocaleTimeString()
  let [time,setTime] = useState(now)

  setInterval(currentTime, 1000)

  function currentTime(){
    const now = new Date().toLocaleTimeString()
    setTime(now)
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
