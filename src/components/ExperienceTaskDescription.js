import React, { Component } from "react";

class ExperienceTaskDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.task.text,
      id: this.props.task.id,
    };
  }

  onInputChange = (e) => {
    this.setState({
      text: e.target.value,
    }, () => {
        this.props.editTask(this.state.id, this.state.text);
    });
  };

  render() {
    const { editMode } = this.props;
    const mode = editMode ? "editMode" : "submittedMode";
    return (
      <li>
        <input
          className={`input-exp-desc ${mode}`}
          type="text"
          value={this.state.text}
          disabled={!editMode}
          onChange={this.onInputChange}
        />
      </li>
    );
  }
}

export default ExperienceTaskDescription;
