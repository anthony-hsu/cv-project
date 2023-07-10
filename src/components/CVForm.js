import React from "react";
import General from "./General";
import Experience from "./Experience";
import Education from "./Education";

const CVForm = (props) => {
  const { editMode } = props;
  return (
    <div className="cv-contents">
      <General editMode={editMode} />
      <Experience editMode={editMode} />
      <Education editMode={editMode} />
    </div>
  );
};

export default CVForm;
