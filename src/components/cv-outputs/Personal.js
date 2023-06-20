import React from "react";

const Personal = (props) => {
  const item = props.info;
  return (
    <div className="personal-info-con">
      <div className="personal-info">
        <div className="header-and-desc">
          <h1>
            {item.fname} {item.lname}
          </h1>
          <h3>{item.title}</h3>
        </div>
        <div className="contact-info">
          <p>{item.street}</p>
          <p>{item.city}</p>
          <br></br>
          <p>
            <b>{item.phone}</b>
          </p>
          <p>
            <b>{item.email}</b>
          </p>
        </div>
      </div>
      <div className="description">
        <h3 className="output-header">Description</h3>
        <p>
          <i>{item.desc}</i>
        </p>
      </div>
    </div>
  );
};

export default Personal;
