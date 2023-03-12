import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString("en-GB");

  // console.log(now);

  const [time, setTime] = useState(now);
  function updateTime() {
    const newTime = new Date().toLocaleTimeString("en-GB");
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
