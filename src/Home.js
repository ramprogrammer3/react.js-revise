import React from "react";
class Home extends React.Component{
    render(){
      return(
        <>
          <button onClick={this.props.incrementHomeDataValue} >inclement</button>
          <span> {this.props.val}  </span>
          <button onClick={this.props.decrementHomeDataValue} >decrement</button>
        </>
      )
    }
  }

export default Home