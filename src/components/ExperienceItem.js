import React, { useState } from "react";
import ExperienceItemTasks from "./ExperienceItemTasks";

const ExperienceItem = (props) => {
  const [company, setCompany] = useState("Code Company");
  const [role, setRole] = useState("Software Engineer");
  const [start, setStart] = useState("08/2016");
  const [end, setEnd] = useState("Present");

  const { editMode } = props;
  const mode = editMode ? "editMode" : "submittedMode";

  const onCompanyInputChange = (e) => {
    setCompany(e.target.value);
  };
  const onRoleInputChange = (e) => {
    setRole(e.target.value);
  };
  const onStartInputChange = (e) => {
    setStart(e.target.value);
  };
  const onEndInputChange = (e) => {
    setEnd(e.target.value);
  };

  return (
    <div className="exp-item-wrapper">
      <div className="task-wrapper">
        <div className="task-info-wrapper">
          <input
            className={`input-exp-company ${mode}`}
            type="text"
            name="company"
            value={company}
            onChange={onCompanyInputChange}
            disabled={!editMode}
          />
          <input
            className={`input-exp-title ${mode}`}
            type="text"
            name="role"
            value={role}
            onChange={onRoleInputChange}
            disabled={!editMode}
          />
        </div>
        <ExperienceItemTasks editMode={editMode} />
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

export default ExperienceItem;
