import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Anthony Hsu",
      phone: "(123) 456-7890",
      email: "user@github.com",
    };
  }

  onInputChange = (e) => {
    this.setState(
        {
            [e.target.name]: e.target.value,
        }
    )
  }

  render() {
    const {editMode} = this.props;
    const mode = editMode ? "editMode" : "submittedMode";
    return (
      <>
        <form id="form-general">
          <div id="general-name">
            <h1>{this.state.name}</h1>
          </div>
          <div id="general-contact">
            <div>
              <label>Phone Number: </label>
              <input 
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.onInputChange}
                className={mode}
                disabled={!editMode}
              />
            </div>
            <div>
              <label>Email: </label>
              <input 
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.onInputChange}
                className={mode}
                disabled={!editMode}
              />
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default General;
