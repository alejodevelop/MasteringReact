import React, { useState } from "react";


function App() {

  const [isMouseOver, setisMouseOver] = useState(false);

  const [name, setName] = useState("");

  const [nameWhenGetClick, setnameWhenGetClick] = useState("");

  function handleMouseOver() {
    setisMouseOver(true);
  }

  function handleMouseOut() {
    setisMouseOver(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setnameWhenGetClick(name);

    // event.preventDefault();
  }


  return (
    <div className="container">
      <h1>Hello {nameWhenGetClick}</h1>
      <input onChange={handleChange} value={name} type="text" placeholder="What's your name?" />
      <button onClick={handleClick} style={{ backgroundColor: isMouseOver ? "black" : "white" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Submit</button>
    </div >

    // <div className="container">
    //   <form onSubmit={handleClick}>
    //     <h1>Hello {nameWhenGetClick}</h1>
    //     <input onChange={handleChange} value={name} type="text" placeholder="What's your name?" />
    //     <button type="submit" style={{ backgroundColor: isMouseOver ? "black" : "white" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Submit</button>
    //   </form>
    // </div >
  );
}

export default App;
