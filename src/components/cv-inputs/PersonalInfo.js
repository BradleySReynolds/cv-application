import React, { Component } from "react";
import Input from "../utils/Input";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange } = this.props;

    return (
      <div>
        <Input
          handleChange={handleChange}
          name={"fname"}
          placeholder={"First Name"}
        />
      </div>
    );
  }
}

export default PersonalInfo;
