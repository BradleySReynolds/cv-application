import React, { Component } from "react";
import Input from "../utils/Input";

class EducationInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange } = this.props;
    const id = this.props.id;

    return (
      <div className="inputs inputEducation" id={id}>
        <Input
          handleChange={handleChange}
          name={"uniName"}
          placeholder={"University"}
        />
        <Input handleChange={handleChange} name={"city"} placeholder={"City"} />
        <Input
          handleChange={handleChange}
          name={"degree"}
          placeholder={"Degree"}
        />
        <Input
          handleChange={handleChange}
          name={"desc"}
          placeholder={"Description"}
        />
        <Input handleChange={handleChange} name={"from"} placeholder={"From"} />
        <Input handleChange={handleChange} name={"to"} placeholder={"To"} />
      </div>
    );
  }
}

export default EducationInfo;
