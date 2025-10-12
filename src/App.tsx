// import React from "react";
import { Button } from "./components/Button/Button";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <Button
        label="Click Me"
        onClick={() => alert("Button clicked!")}
        backgroundColor="#ff00aaff"
      />
    </div>
  );
}

export default App;
