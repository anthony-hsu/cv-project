import React, { useState } from "react";

const ExperienceTaskDescription = (props) => {
  const { editMode, task, editTask } = props;
  const [text, setText] = useState(task.text);

  const onInputChange = (e) => {
    setText(e.target.value, () => {
      editTask(task.id, text);
    });
  };
  const mode = editMode ? "editMode" : "submittedMode";
  return (
    <li>
      <input
        className={`input-exp-desc ${mode}`}
        type="text"
        value={text}
        disabled={!editMode}
        onChange={onInputChange}
      />
    </li>
  );
};

export default ExperienceTaskDescription;
