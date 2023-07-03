import React, { Component } from "react";
import CVForm from "./components/CVForm";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <form className="form-container">
          <div className="buttons-container">
            <button>Edit</button>
            <button>Submit</button>
          </div>
          <CVForm className="cv-contents"/>
        </form>
      </div>
    );
  }
}

export default App;
