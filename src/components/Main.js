import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Personal from "./cv-outputs/Personal";
import PersonalInfo from "./cv-inputs/PersonalInfo";
import ExperienceInfo from "./cv-inputs/ExperienceInfo";
import Experience from "./cv-outputs/Experience";
import Education from "./cv-outputs/Education";
import EducationInfo from "./cv-inputs/EducationInfo";

const Main = () => {
  const [state, setState] = useState({
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

    setState((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  const handleChangeExperience = (e) => {
    const { name, value } = e.target;
    const id = e.target.closest("div").id;

    setState((prevState) => {
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
        ...prevState,
        experienceInfo: updatedExperienceInfo,
      };
    });
  };

  const handleChangeEducation = (e) => {
    const { name, value } = e.target;
    const id = e.target.closest("div").id;
    setState((prevState) => {
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
        ...prevState,
        educationInfo: updatedEducationInfo,
      };
    });
  };

  const addExperience = () => {
    setState((prevState) => ({
      ...prevState,
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
    setState((prevState) => ({
      ...prevState,
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
    const newList = state.experienceInfo.filter((item) => item.key !== id);

    setState((prevState) => ({
      ...prevState,
      experienceInfo: [...newList],
    }));
  };

  const deleteItemEdu = (e) => {
    const id = e.target.id;
    const newList = state.educationInfo.filter((item) => item.key !== id);

    setState((prevState) => ({
      ...prevState,
      educationInfo: [...newList],
    }));
  };

  return (
    <div className="main">
      <div className="info-container">
        <h3 className="header">Personal state</h3>
        <PersonalInfo handleChange={handleChangePersonal} />

        <h3 className="header">Experience</h3>
        {state.experienceInfo.map((item) => {
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
        {state.educationInfo.map((item) => {
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
        <Personal info={state.personalInfo} />
        <h3 className="output-header">Experience</h3>
        {state.experienceInfo.map((item) => {
          return (
            <div key={item.key}>
              <Experience info={item} />
            </div>
          );
        })}
        <h3 className="output-header">Education</h3>
        {state.educationInfo.map((item) => {
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
