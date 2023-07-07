import React, { Component } from "react";
import EducationItem from "./EducationItem";
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educationItems: [{ id: uniqid() }],
    };
  }

  addEducation = () => {
    this.setState((prevState) => ({
      educationItems: [...prevState.educationItems, { id: uniqid() }],
    }),
    () => console.log(this.state));
  };

  render() {
    const { editMode } = this.props;
    return (
      <>
        <form>
          <h3>Education</h3>
          {this.state.educationItems.map((item) => {
            return <EducationItem key={item.id} editMode={editMode} />;
          })}
        </form>
        {!editMode ? (
          <></>
        ) : (
          <button className="btn-add" onClick={this.addEducation}>
            +
          </button>
        )}
      </>
    );
  }
}

export default Education;
