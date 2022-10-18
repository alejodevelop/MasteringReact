import React from "react";
import Login from "./Login";

var isLoggedIn = false;

// const currentTime = new Date().getHours;

function App() {
  return (
    <div className="container">
      {
        isLoggedIn ? <h1>Hello</h1> : <Login />
        /* currentTime > 12 && <h1>why are you still enjoining?</h1> */
      }
    </div>
  );
}

export default App;
