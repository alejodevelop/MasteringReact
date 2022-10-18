import React, { useState } from "react";


function App() {

  const time = new Date().toLocaleTimeString();

  var [currentTime, setTime] = useState(time);

  function uploadTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime)
  }

  //do the hour change every second, 1000 miliseconds equal to 1 second.
  setInterval(uploadTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={uploadTime}>Get Time</button>
    </div>
  );
}

export default App;
