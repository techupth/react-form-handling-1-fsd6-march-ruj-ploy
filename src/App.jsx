import { useState } from "react";
import "./App.css";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const [greetingMessageInput, setGreeingMessageInput] = useState("");

  const greetingMessageInputHandle = (e) => {
    setGreeingMessageInput(e.target.value);
  };

  const sunmitHandle = (e) => {
    e.preventDefault();
    if (greetingMessage !== "") {
      setGreetingMessage(greetingMessageInput);
    } else {
      return;
    }
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <form onSubmit={sunmitHandle} action="">
        <div className="input-container">
          <label htmlFor="greeting-message">New Greeting Message</label>
          <input
            onChange={greetingMessageInputHandle}
            value={greetingMessageInput}
            id="greeting-message"
            type="text"
          />
        </div>

        <div className="buttons">
          <button>Update text</button>
        </div>
      </form>
    </div>
  );
}

export default App;
