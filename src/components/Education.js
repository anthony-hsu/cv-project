import React, { useState } from "react";
import EducationItem from "./EducationItem";
import uniqid from "uniqid";

const Education = (props) => {
  const [educationItems, setEducationItems] = useState([{ id: uniqid() }]);
  const addEducation = () => {
    setEducationItems([...educationItems, { id: uniqid() }]);
  };
  const { editMode } = props;

  return (
    <>
      <form>
        <h3>Education</h3>
        {educationItems.map((item) => {
          return <EducationItem key={item.id} editMode={editMode} />;
        })}
      </form>
      {!editMode ? (
        <></>
      ) : (
        <button className="btn-add" onClick={addEducation}>
          +
        </button>
      )}
    </>
  );
};

export default Education;
