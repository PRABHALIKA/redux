import React    from "react";
import template from "./Child1.jsx";
import getNameAction from '../actions/nameAction';
import {connect} from 'react-redux'
class Child1 extends React.Component {
  render() {
    return template.call(this);
  }

  fnSendName(){
    debugger;
    let name=this.refs.name.value;
    getNameAction(name,this.props.dispatch)
  }
}

const mapDispatchToProps=(d)=>{
    return {
       'dispatch':d
    }
}

export default connect(null,mapDispatchToProps)(Child1);
