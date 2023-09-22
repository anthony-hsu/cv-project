import React, { useState } from "react";
import CVForm from "./components/CVForm";
import Button from "@mui/material/Button";
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
          <Button variant="contained" disabled={editMode} onClick={() => btnEditClick()}>Edit</Button>
          <Button variant="contained" disabled={!editMode} onClick={() => btnSubmitClick()}>Save</Button>
        </div>
        <CVForm editMode={editMode} />
      </div>
    </div>
  );
};

export default App;
