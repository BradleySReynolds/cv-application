import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Personal from "./cv-outputs/Personal";
import PersonalInfo from "./cv-inputs/PersonalInfo";
import ExperienceInfo from "./cv-inputs/ExperienceInfo";
import Experience from "./cv-outputs/Experience";
import Education from "./cv-outputs/Education";
import EducationInfo from "./cv-inputs/EducationInfo";

const Main = () => {
  const [information, setInformation] = useState({
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
  });

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  const handleChangeExperience = (e) => {
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

  const handleChangeEducation = (e) => {
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

  const addExperience = () => {
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

  const addEducation = () => {
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

  const deleteItemExp = (e) => {
    const id = e.target.id;
    const newList = this.state.experienceInfo.filter((item) => item.key !== id);

    this.setState({
      experienceInfo: [...newList],
    });
  };

  const deleteItemEdu = (e) => {
    const id = e.target.id;
    const newList = this.state.educationInfo.filter((item) => item.key !== id);

    this.setState({
      educationInfo: [...newList],
    });
  };

  return (
    <div className="main">
      <div className="info-container">
        <h3 className="header">Personal Information</h3>
        <PersonalInfo handleChange={handleChangePersonal} />

        <h3 className="header">Experience</h3>
        {this.state.experienceInfo.map((item) => {
          return (
            <div className="container experienceCon" key={item.key}>
              <ExperienceInfo
                handleChange={handleChangeExperience}
                id={item.key}
              />
              <button onClick={deleteItemExp} id={item.key}>
                Delete
              </button>
            </div>
          );
        })}
        <button onClick={addExperience}>Add</button>

        <h3 className="header">Education</h3>
        {this.state.educationInfo.map((item) => {
          return (
            <div className="container educationCon" key={item.key}>
              <EducationInfo
                handleChange={handleChangeEducation}
                id={item.key}
              />
              <button onClick={deleteItemEdu} id={item.key}>
                Delete
              </button>
            </div>
          );
        })}
        <button onClick={addEducation}>Add</button>
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
};
export default Main;
