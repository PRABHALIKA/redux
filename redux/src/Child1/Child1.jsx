import "./Child1.css";
import React from "react";

function template() {
  return (
    <div className="child-1">
      <h1>Child1</h1>
      <div><input ref="name" /><input type="button" value='send data' onClick={this.fnSendName.bind(this)} /></div>
    </div>
  );
};

export default template;
