import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { position, company, city, desc, from, to } = this.props.info;

    return (
      <div className="experience">
        <p>
          <b>{company}</b>, {city} — {position}
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

export default Experience;
