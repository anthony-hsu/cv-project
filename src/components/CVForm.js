import React, { Component } from 'react'
import General from './General'
import Experience from './Experience'
import Education from './Education'

class CVForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
      }
    }
    
  render() {
    const {className, editMode} = this.props;
    return (
      <div className={className}>
        <General editMode={editMode} />
        <Experience editMode={editMode} />
        <Education editMode={editMode} />
      </div>
    )
  }
}

export default CVForm