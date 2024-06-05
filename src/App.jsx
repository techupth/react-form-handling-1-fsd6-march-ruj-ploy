import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMessageInput, setGreetingMessageInput] = useState("");
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const handleChange = (event) => {
    setGreetingMessageInput(event.target.value);
  };
  const handleClick = () => {
    setGreetingMessage(greetingMessageInput);
  };
  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={greetingMessageInput}
          onChange={handleChange}
        />
      </div>

      <div className="buttons">
        <button onClick={handleClick}>Update text</button>
      </div>
    </div>
  );
}

export default App;
