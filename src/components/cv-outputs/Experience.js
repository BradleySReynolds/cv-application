import React from "react";

const Experience = (props) => {
  const item = props.info;

  return (
    <div className="experience">
      <p>
        <b>{item.company}</b>, {item.city} — {item.position}
      </p>
      <p>
        <span className="grey">
          {item.from} - {item.to}
        </span>
      </p>
      <p className="exp-des">{item.desc}</p>
    </div>
  );
};

export default Experience;
