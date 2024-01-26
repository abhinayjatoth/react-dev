import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

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
                <h1>ABout Page</h1>
                <div>
                    <UserContext.Consumer>
                        {({ loggedInUser }) => <h2>{loggedInUser}</h2>}
                    </UserContext.Consumer>
                </div>
            <UserClass name='Abhinay' location='SanJose' />
        </div>
        )
    }
}

export default About;