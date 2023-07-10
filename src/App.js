import React, { useState } from "react";
import CVForm from "./components/CVForm";
import "./styles/App.css";

const App = () => {
  const [editMode, setEditMode] = useState(false);

  const btnEditClick = () => {
    setEditMode(true);
  };

  const btnSubmitClick = () => {
    setEditMode(false);
  };

  return (
    <div className="App">
      <div className="form-container">
        <div className="buttons-container">
          <button onClick={() => btnEditClick()}>Edit</button>
          <button onClick={() => btnSubmitClick()}>Submit</button>
        </div>
        <CVForm editMode={editMode} />
      </div>
    </div>
  );
};

export default App;
