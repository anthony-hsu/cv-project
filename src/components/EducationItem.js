import React, { Component } from "react";

class EducationItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: "The University of Texas at Austin",
      major: "B.S., Biomedical Engineering",
      start: "Fall 2012",
      end: "Spring 2016",
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
      <div className="ed-item-wrapper">
        <div className="ed-info-wrapper">
          <input
            className={`input-school ${mode}`}
            type="text"
            name="school"
            value={this.state.school}
            onChange={this.onInputChange}
            disabled={!editMode}
          />
          <input
            className={`input-major ${mode}`}
            type="text"
            name="major"
            value={this.state.major}
            onChange={this.onInputChange}
            disabled={!editMode}
          />
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

export default EducationItem;
