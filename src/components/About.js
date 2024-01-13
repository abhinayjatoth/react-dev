import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor() {
        super();
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent Mount");
    }

    render() {
        return (
            <div>
                {console.log("Parent Render")}
            <h1>Contact Page</h1>
            <UserClass name='Abhinay' location='SanJose' />
        </div>
        )
    }
}

export default About;