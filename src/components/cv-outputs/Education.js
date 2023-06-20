import React from "react";

const Education = (props) => {
  const item = props.info;
  return (
    <div className="education">
      <p>
        <b>{item.uniName}</b>, {item.city} — {item.degree}
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

export default Education;
