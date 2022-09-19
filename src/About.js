import React from "react";

class About extends React.Component{
    componentDidMount(){
        localStorage.setItem("month" , "may");
    }

    componentWillUnmount(){
        console.log(" componentWillUnmount is being called ");
        localStorage.clear("month");
    }
    render(){
        return(
            <>
                <h1>About  component </h1>
            </>
        )
    }
}
export default About;