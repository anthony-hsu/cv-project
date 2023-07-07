import React, { Component } from "react";
import ExperienceItem from "./ExperienceItem";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { editMode } = this.props;
    const mode = editMode ? "editMode" : "submittedMode";
    return (
      <>
        <form>
          <h3>Experience</h3>
          <ExperienceItem editMode={editMode} />
          
        </form>
      </>
    );
  }
}

export default Experience;
