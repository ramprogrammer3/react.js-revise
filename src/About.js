import React from "react";
class About extends React.Component{
    render(){
      return(
        <>
          <button onClick={this.props.incrementAboutValue }>inclement</button>
          <span> {this.props.val}  </span>
          <button onClick={this.props.decrementAboutValue}>decrement</button>
        </>
      )
    }
  }

export default About