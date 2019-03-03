import React    from "react";
import template from "./Child2.jsx";
import {connect} from 'react-redux'
class Child2 extends React.Component {
  render() {
    return template.call(this);
  }
}

const mapStatetoProps=(state)=>{
    return {
       'n':state.nameReducer.name
    }
}

export default connect(mapStatetoProps)(Child2);
