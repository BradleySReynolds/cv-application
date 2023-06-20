import React, { Component } from "react";
import Input from "../utils/Input";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange } = this.props;

    return (
      <div className="inputs inputPersonal">
        <Input
          handleChange={handleChange}
          name={"fname"}
          placeholder={"First Name"}
        />
        <Input
          handleChange={handleChange}
          name={"lname"}
          placeholder={"Last Name"}
        />
        <Input
          handleChange={handleChange}
          name={"title"}
          placeholder={"Title"}
        />
        <Input
          handleChange={handleChange}
          name={"street"}
          placeholder={"Street"}
        />
        <Input
          handleChange={handleChange}
          name={"city"}
          placeholder={"City, State, Zip"}
        />
        <Input
          handleChange={handleChange}
          name={"phone"}
          placeholder={"Phone Number"}
        />
        <Input
          handleChange={handleChange}
          name={"email"}
          placeholder={"Email"}
        />
        <Input
          handleChange={handleChange}
          name={"desc"}
          placeholder={"Description"}
        />
      </div>
    );
  }
}

export default PersonalInfo;
