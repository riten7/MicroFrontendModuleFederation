import React from "react";

const App: React.FC = () => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        border: "1px solid green",
      }}
    >
      <h2>Micro Frontend with exposed component</h2>
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*dlDbzcRbWfl-mda-8KXnBg.jpeg"
        alt="micro frontend image"
        width='100%'
        height='100%'
      />{" "}
      Application that can be consumed by the host{" "}
    </div>
  );
}

export default App;