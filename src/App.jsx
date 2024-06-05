import "./App.css";
import { useState } from "react";

function App() {
  const [text, setMessage] = useState("Greeting Message");
  function handleSubmit(event) {
    event.preventDefault();
    setMessage(event.target.inputBox.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="App">
        <div className="greeting-container">{text}</div>
        <div className="input-container">
          <label htmlFor="greeting-message">New Greeting Message</label>
          <input id="greeting-message" type="text" name="inputBox" required/>
        </div>
        <div type="submit" className="buttons">
          <button>Update text</button>
        </div>
      </div>
    </form>
  );
}

export default App;
