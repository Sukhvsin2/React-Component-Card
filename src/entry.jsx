import React from "react";

export default function Entry(props) {
  return (
    <div className="card">
      <dt>
        <span className="emoji" role="img" aria-label={props.label}>
          {props.emo}
        </span>
        <span>{props.head}</span>
      </dt>
      <dd>{props.desc}</dd>
    </div>
  );
}
