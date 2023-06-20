import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Personal from "./cv-outputs/Personal";
import PersonalInfo from "./cv-inputs/PersonalInfo";
import ExperienceInfo from "./cv-inputs/ExperienceInfo";
import Experience from "./cv-outputs/Experience";
import Education from "./cv-outputs/Education";
import EducationInfo from "./cv-inputs/EducationInfo";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      personalInfo: {
        fname: "",
        lname: "",
        title: "",
        street: "",
        city: "",
        phone: "",
        email: "",
        desc: "",
      },
      experienceInfo: [
        {
          key: uuidv4(),
          position: "",
          company: "",
          desc: "",
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
          desc: "",
          from: "",
          to: "",
        },
      ],
    };

    this.handleChangePersonal = this.handleChangePersonal.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);
    this.handleChangeEducation = this.handleChangeEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteItemEdu = this.deleteItemEdu.bind(this);
    this.deleteItemExp = this.deleteItemExp.bind(this);
  }

  handleChangePersonal = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  handleChangeExperience = (e) => {
    const { name, value } = e.target;
    const id = e.target.closest("div").id;

    this.setState((prevState) => {
      const updatedExperienceInfo = prevState.experienceInfo.map((item) => {
        if (item.key === id) {
          return {
            ...item,
            [name]: value,
          };
        }
        return item;
      });

      return {
        experienceInfo: updatedExperienceInfo,
      };
    });
  };

  handleChangeEducation = (e) => {
    const { name, value } = e.target;
    const id = e.target.closest("div").id;

    this.setState((prevState) => {
      const updatedEducationInfo = prevState.educationInfo.map((item) => {
        if (item.key === id) {
          return {
            ...item,
            [name]: value,
          };
        }
        return item;
      });

      return {
        educationInfo: updatedEducationInfo,
      };
    });
  };

  addExperience = () => {
    this.setState((prevState) => ({
      experienceInfo: [
        ...prevState.experienceInfo,
        {
          key: uuidv4(),
          position: "",
          company: "",
          desc: "",
          city: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  addEducation = () => {
    this.setState((prevState) => ({
      educationInfo: [
        ...prevState.educationInfo,
        {
          key: uuidv4(),
          uniName: "",
          city: "",
          degree: "",
          desc: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  deleteItemExp = (e) => {
    const id = e.target.id;
    const newList = this.state.experienceInfo.filter((item) => item.key !== id);

    this.setState({
      experienceInfo: [...newList],
    });
  };

  deleteItemEdu = (e) => {
    const id = e.target.id;
    const newList = this.state.educationInfo.filter((item) => item.key !== id);

    this.setState({
      educationInfo: [...newList],
    });
  };

  render() {
    return (
      <div className="main">
        <div className="info-container">
          <h3 className="header">Personal Information</h3>
          <PersonalInfo handleChange={this.handleChangePersonal} />

          <h3 className="header">Experience</h3>
          {this.state.experienceInfo.map((item) => {
            return (
              <div className="container experienceCon" key={item.key}>
                <ExperienceInfo
                  handleChange={this.handleChangeExperience}
                  id={item.key}
                />
                <button onClick={this.deleteItemExp} id={item.key}>
                  Delete
                </button>
              </div>
            );
          })}
          <button onClick={this.addExperience}>Add</button>

          <h3 className="header">Education</h3>
          {this.state.educationInfo.map((item) => {
            return (
              <div className="container educationCon" key={item.key}>
                <EducationInfo
                  handleChange={this.handleChangeEducation}
                  id={item.key}
                />
                <button onClick={this.deleteItemEdu} id={item.key}>
                  Delete
                </button>
              </div>
            );
          })}
          <button onClick={this.addEducation}>Add</button>
        </div>
        <div className="output-container">
          <Personal info={this.state.personalInfo} />
          <h3 className="output-header">Experience</h3>
          {this.state.experienceInfo.map((item) => {
            return (
              <div key={item.key}>
                <Experience info={item} />
              </div>
            );
          })}
          <h3 className="output-header">Education</h3>
          {this.state.educationInfo.map((item) => {
            return (
              <div key={item.key}>
                <Education info={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Main;
