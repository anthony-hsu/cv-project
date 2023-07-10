import React, { useState } from "react";

const EducationItem = (props) => {
  const [school, setSchool] = useState("The University of Texas at Austin");
  const [major, setMajor] = useState("B.S., Biomedical Engineering");
  const [start, setStart] = useState("Fall 2012");
  const [end, setEnd] = useState("Spring 2016");
  const { editMode } = props;
  const mode = editMode ? "editMode" : "submittedMode";

  const onSchoolInputChange = (e) => {
    setSchool(e.target.value);
  };
  const onMajorInputChange = (e) => {
    setMajor(e.target.value);
  };
  const onStartInputChange = (e) => {
    setStart(e.target.value);
  };
  const onEndInputChange = (e) => {
    setEnd(e.target.value);
  };

  return (
    <div className="ed-item-wrapper">
      <div className="ed-info-wrapper">
        <input
          className={`input-school ${mode}`}
          type="text"
          name="school"
          value={school}
          onChange={onSchoolInputChange}
          disabled={!editMode}
        />
        <input
          className={`input-major ${mode}`}
          type="text"
          name="major"
          value={major}
          onChange={onMajorInputChange}
          disabled={!editMode}
        />
      </div>
      <div className="date-wrapper">
        <input
          className={`date-start ${mode}`}
          type="text"
          name="start"
          value={start}
          onChange={onStartInputChange}
          disabled={!editMode}
        />
        -
        <input
          className={`date-end ${mode}`}
          type="text"
          name="end"
          value={end}
          onChange={onEndInputChange}
          disabled={!editMode}
        />
      </div>
    </div>
  );
};

export default EducationItem;