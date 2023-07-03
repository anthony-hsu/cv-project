import React, { Component } from 'react'
import General from './General'
import Experience from './Experience'
import Education from './Education'

class CVForm extends Component {
  render() {
    return (
      <div>
        <General />
        <Experience />
        <Education />
      </div>
    )
  }
}

export default CVForm