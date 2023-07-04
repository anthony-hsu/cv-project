import React, { Component } from "react";

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
          <label>Title: </label>
          <input
            type="text"
            // value={this.state.phone}
            // onChange={this.onInputChange}
            className={mode}
            disabled={!editMode}
          />
        </form>
      </>
    );
  }
}

export default Experience;
