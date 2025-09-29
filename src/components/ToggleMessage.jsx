// Task 1: Component to Toggle message
import { useState } from "react";
function ToggleMessage() {
  // State to track if message should be shown (false by default)
  const [show, setShow] = useState(false);

  return (
    <div className="card">
      <h2>Task 1: Toggle Message</h2>
    
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Message" : "Show Message"}
      </button>
      {show && <p>Hello, welcome to React!</p>}
    </div>
  );
}

export default ToggleMessage;