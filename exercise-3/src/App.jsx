import React from "react";
import { useState } from "react";
function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [A, setA] = useState("");
  const [B, setB] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);
  /* You will need some function to handle the key pressed and button events */
  const onA = (e) =>{
    setA(e.target.value);
  };
  const onB = (e) =>{
    setB(e.target.value);
  };

  const onCompute = () => {
    if (isNaN(A) || isNaN(B) || A === "" || B === "") {
      setResult("Please enter valid numbers.");
      setError(true);
    } else {
      setResult(Number(A) + Number(B));
      setError(false);
    }
  };
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input value={A} onChange={onA} />

      <label>B =</label>
      <input value={B} onChange={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input 
      value={result}
      disabled 
        style={{ color: error ? "red" : "black" }} 
      />
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;
