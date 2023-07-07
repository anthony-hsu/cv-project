import React, { Component } from "react";
import ExperienceItem from "./ExperienceItem";
import uniqid from "uniqid";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experienceItems: [
        {
          id: uniqid(),
        },
      ],
    };
  }

  addTask = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      experienceItems: [...prevState.experienceItems, { id: uniqid() }],
    }));
  };

  render() {
    const { editMode } = this.props;
    return (
      <>
        <form>
          <h3>Experience</h3>
          {this.state.experienceItems.map((item) => {
            return <ExperienceItem key={item.id} editMode={editMode} />;
          })}
        </form>
        {!editMode ? (
          <></>
        ) : (
          <button className="btn-add" onClick={this.addTask}>
            +
          </button>
        )}
      </>
    );
  }
}

export default Experience;
