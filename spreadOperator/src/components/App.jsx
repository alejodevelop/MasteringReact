import React, { useState } from "react";
import { createLogicalAnd } from "typescript";

function App() {

  const [text, setText] = useState("");
  const [textContainer, setTextContainer] = useState([]);

  function handleText(event) {
    setText(event.target.value);
  }

  function saveText() {
    setTextContainer((preValues) => {
      return [...preValues, text]
    });
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={text} onChange={handleText} type="text" />
        <button onClick={saveText}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {textContainer.map(item => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
