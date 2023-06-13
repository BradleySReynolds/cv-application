import React, { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fname, lname, title, address, phone, email, desc } =
      this.props.info;

    return (
      <div>
        {fname} {lname} {title} {address} {phone} {email} {desc}
      </div>
    );
  }
}

export default Personal;
