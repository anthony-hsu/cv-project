import React, { useState } from "react";

const General = (props) => {
  const { editMode } = props;
  const mode = editMode ? "editMode" : "submittedMode";
  const [name, setName] = useState("Anthony Hsu");
  const [phone, setPhone] = useState("(123) 456-7890");
  const [email, setEmail] = useState("user@github.com");

  const onPhoneInputChange = (e) => {
    setPhone(e.target.value);
  };
  const onEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <form id="form-general">
        <div id="general-name">
          <h1>{name}</h1>
        </div>
        <div id="general-contact">
          <div>
            <label>Phone Number: </label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={onPhoneInputChange}
              className={mode}
              disabled={!editMode}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={onEmailInputChange}
              className={mode}
              disabled={!editMode}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default General;
