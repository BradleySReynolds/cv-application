import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Personal from "./cv-outputs/Personal";
import PersonalInfo from "./cv-inputs/PersonalInfo";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      personalInfo: {
        fname: "",
        lname: "",
        title: "",
        address: "",
        phone: "",
        email: "",
        desc: "",
      },
      experienceInfo: [
        {
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
      educationInfo: [
        {
          key: uuidv4(),
          uniName: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    this.setState((prevState) => ({
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  render() {
    const { personalInfo } = this.state;

    return (
      <div>
        <Personal info={personalInfo} />
        <PersonalInfo handleChange={this.handleChange} />
      </div>
    );
  }
}

export default Main;
