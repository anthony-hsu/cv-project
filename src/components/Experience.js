import React, { useState } from "react";
import ExperienceItem from "./ExperienceItem";
import uniqid from "uniqid";

const Experience = (props) => {
  const [experienceItems, setExperienceItems] = useState([{ id: uniqid() }]);
  const addTask = (e) => {
    e.preventDefault();
    setExperienceItems([...experienceItems, { id: uniqid() }]);
  };
  const { editMode } = props;

  return (
    <>
      <form>
        <h3>Experience</h3>
        {experienceItems.map((item) => {
          return <ExperienceItem key={item.id} editMode={editMode} />;
        })}
      </form>
      {!editMode ? (
        <></>
      ) : (
        <button className="btn-add" onClick={addTask}>
          +
        </button>
      )}
    </>
  );
};

export default Experience;
