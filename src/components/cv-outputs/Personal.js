import React, { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fname, lname, title, street, city, phone, email, desc } =
      this.props.info;

    return (
      <div className="personal-info-con">
        <div className="personal-info">
          <div className="header-and-desc">
            <h1>
              {fname} {lname}
            </h1>
            <h3>{title}</h3>
          </div>
          <div className="contact-info">
            <p>{street}</p>
            <p>{city}</p>
            <br></br>
            <p>
              <b>{phone}</b>
            </p>
            <p>
              <b>{email}</b>
            </p>
          </div>
        </div>
        <div className="description">
          <h3 className="output-header">Description</h3>
          <p>
            <i>{desc}</i>
          </p>
        </div>
      </div>
    );
  }
}

export default Personal;
