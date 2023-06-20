import React from "react";
import Input from "../utils/Input";

const EducationInfo = (props) => {
  return (
    <div className="inputs inputEducation" id={props.id}>
      <Input
        handleChange={props.handleChange}
        name={"uniName"}
        placeholder={"University"}
      />
      <Input
        handleChange={props.handleChange}
        name={"city"}
        placeholder={"City"}
      />
      <Input
        handleChange={props.handleChange}
        name={"degree"}
        placeholder={"Degree"}
      />
      <Input
        handleChange={props.handleChange}
        name={"desc"}
        placeholder={"Description"}
      />
      <Input
        handleChange={props.handleChange}
        name={"from"}
        placeholder={"From"}
      />
      <Input handleChange={props.handleChange} name={"to"} placeholder={"To"} />
    </div>
  );
};

export default EducationInfo;
