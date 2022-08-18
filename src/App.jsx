import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setText(name);

    event.preventDefault();
  }

  return (
    <div className="App">
      <h1>Hello {text}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter your Name"
          value={name}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
