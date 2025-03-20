import React from "react";
function App() {
  /* You will need to use a boolean state to manage the weather */

  const [isRainning, setIsRainning] = React.useState(false);

  function onSunClick() {
    // Complete this code when we click on Sunny Time
    setIsRainning(true);
    
  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time
    setIsRainning(false);
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
    return isRainning ? "Sunny Time" : "Rain Time";
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
    return isRainning ? "sunny" : "rainy";
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick ={onSunClick}>Sunny Time</button>
      <button onClick ={onRainClick} >Rain Time</button>
    </main>
  );
}

export default App;
