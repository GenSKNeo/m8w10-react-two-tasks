// Task 2: Component to change color of a box
import { useState } from "react";
function ColorChanger() {
  const [color, setColor] = useState("lightgray");

  return (
    <div className="card">
      <h2>Task 2: Color Changer</h2>
      <input
        type="text"
        placeholder="Enter a color name or hex code"
        value={color}
        onChange={(e) => setColor(e.target.value)} // Update color state on change
      />
      <div className="color-box" style={{ backgroundColor: color }}>
        <span className="color-text">{color}</span>
      </div>
    </div>
  );
}

export default ColorChanger;
