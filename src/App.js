import React, { Component } from "react";
import CVForm from "./components/CVForm";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
       editMode: false,
    }
  }

  btnEditClick = () => {
    console.log(this);
  }

  render() {
    return (
      <div className="App">
        <div className="form-container">
          <div className="buttons-container">
            <button onClick={() => this.btnEditClick()}>Edit</button>
            <button>Submit</button>
          </div>
          <CVForm className="cv-contents"/>
        </div>
      </div>
    );
  }
}

export default App;
