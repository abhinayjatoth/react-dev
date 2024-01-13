import React from "react";

class UserClass extends React.Component{

    constructor(props) {
        super(props)

        this.state={
            user:"",
        }

    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/abhinayjatoth")
        const json = await data.json();
        this.setState({
            user:json
        })
    }
   
    render() {
        const { name, location } = this.state.user;
        return (
            <div>
                <h1>{name}</h1>
                <h2>{location}</h2>
                {console.log("Child render")}
            </div>
        )
        
    }
}

export default UserClass