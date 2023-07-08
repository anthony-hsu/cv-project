import React, { Component } from "react";
import ExperienceItemTasks from "./ExperienceItemTasks";

class ExperienceItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: "Code Company",
      role: "Software Engineer",
      start: "08/2016",
      end: "Present",
    };
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { editMode } = this.props;
    const mode = editMode ? "editMode" : "submittedMode";
    return (
      <div className="exp-item-wrapper">
        <div className="task-wrapper">
          <div className="task-info-wrapper">
            <input
              className={`input-exp-company ${mode}`}
              type="text"
              name="company"
              value={this.state.company}
              onChange={this.onInputChange}
              disabled={!editMode}
            />
            <input
              className={`input-exp-title ${mode}`}
              type="text"
              name="role"
              value={this.state.role}
              onChange={this.onInputChange}
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
            value={this.state.start}
            onChange={this.onInputChange}
            disabled={!editMode}
          />
          -
          <input
            className={`date-end ${mode}`}
            type="text"
            name="end"
            value={this.state.end}
            onChange={this.onInputChange}
            disabled={!editMode}
          />
        </div>
      </div>
    );
  }
}

export default ExperienceItem;
