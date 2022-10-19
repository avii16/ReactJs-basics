import React, { useState } from "react";



function App() {
  const [todo,settodo] = useState("")
  const [items,setItems] = useState([])


  function handelchange(event){
    const value=event.target.value
    settodo(value)
  }

  function addItem(){
    setItems((previtems) => {
      return [...previtems,todo]
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
        onChange={handelchange}
        type="text"
        value={todo}
        />
        <button
        onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>
            {items.map(todomap => <li>{todomap}</li>)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
