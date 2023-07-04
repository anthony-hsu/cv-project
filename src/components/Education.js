import React, { Component } from 'react'

class Education extends Component {
  render() {
    const {editMode} = this.props;
    const mode = editMode ? "editMode" : "submittedMode";
    return (
      <>
        <form>
            <h3>Education</h3>
            <input type="text"></input>
        </form>
      </>
    )
  }
}

export default Education