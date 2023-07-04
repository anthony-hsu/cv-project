import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Anthony Hsu",
      phone: "(281) 935-6783",
      email: "anthhsu@gmail.com",
    };
  }
  render() {
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
                value={this.state.phone}
                readOnly={true}
              />
            </div>
            <div>
              <label>Email: </label>
              <input 
                type="text"
                value={this.state.email}
                readOnly={true}
              />
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default General;
