import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>-</button>

        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </div>
    </>
  );
}

export default App;
