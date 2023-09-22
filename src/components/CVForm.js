import React from "react";
import General from "./General";
import Experience from "./Experience";
import Education from "./Education";
import Paper from "@mui/material/Paper";

const CVForm = (props) => {
  const { editMode } = props;
  return (
    <Paper elevation={12} square className="cv-contents">
        <General editMode={editMode} />
        <Experience editMode={editMode} />
        <Education editMode={editMode} />
    </Paper>
  );
};

export default CVForm;
