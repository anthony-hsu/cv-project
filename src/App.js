import React, { Component } from "react";
import CVForm from "./components/CVForm";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
       editMode: false,
    }

    this.setEditMode = this.setEditMode.bind();
  }

  btnEditClick = () => {
    this.setEditMode(true);
  }

  btnSubmitClick = () => {
    this.setEditMode(false);
  }

  setEditMode = (editable) => {
    this.setState({
      editMode: editable,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="form-container">
          <div className="buttons-container">
            <button onClick={() => this.btnEditClick()}>Edit</button>
            <button onClick={() => this.btnSubmitClick()}>Submit</button>
          </div>
          <CVForm editMode={this.state.editMode}/>
        </div>
      </div>
    );
  }
}

export default App;
