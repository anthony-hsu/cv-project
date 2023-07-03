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
    return (
      <div className={this.props.className}>
        <General />
        <Experience />
        <Education />
      </div>
    )
  }
}

export default CVForm