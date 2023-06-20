import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { uniName, city, degree, desc, from, to } = this.props.info;

    return (
      <div className="education">
        <p>
          <b>{uniName}</b>, {city} — {degree}
        </p>
        <p>
          <span className="grey">
            {from} - {to}
          </span>
        </p>
        <p className="exp-des">{desc}</p>
      </div>
    );
  }
}

export default Education;
