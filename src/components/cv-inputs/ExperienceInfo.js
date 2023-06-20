import React from "react";
import Input from "../utils/Input";

const ExperienceInfo = (props) => {
  return (
    <div className="inputs inputExperience" id={props.id}>
      <Input
        handleChange={props.handleChange}
        name={"position"}
        placeholder={"Position"}
      />
      <Input
        handleChange={props.handleChange}
        name={"company"}
        placeholder={"Company"}
      />
      <Input
        handleChange={props.handleChange}
        name={"city"}
        placeholder={"City"}
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

export default ExperienceInfo;
