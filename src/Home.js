import React from "react";
class Home extends React.Component{
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.a !== nextProps.a){
            return true
        }else{
            return false
        }
    }
    render(){
        console.log("child component is render ")
        return(
            <>
                <h1>Home component </h1>
                <h2> home : a  = {this.props.a} </h2>
            </>
        )
    }
}
export default Home;