import "./Child2.css";
import React from "react";

function template() {
  return (
    <div className="child-2">
      <h1>Child2 :{this.props.n}</h1>
    </div>
  );
};

export default template;
