import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "H1 "),React.createElement("h2", {}, "H2")]
),React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1", {}, "H1"),React.createElement("h2", {}, "H2")]
)])


// creates object
// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Hello World from react") // children


const root = ReactDOM.createRoot(document.getElementById("root"));

//responsible for taking object and converting into tag and putting into html
root.render(parent);