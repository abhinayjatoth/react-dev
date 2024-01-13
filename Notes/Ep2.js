import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Im heading"
);

// const jsxHeading = <h1 id="heading" className="head">JSX heading</h1>
// console.log(jsxHeading);
// console.log(heading);
const headingElement = (
    <h1 className="head">
        React Element
    </h1>
)

const Title = () => {
     return <h1 className="head" tabIndex="5">
        React Title
    </h1>
}
    
const number = 1000;

const element = <span>React Span Element</span>

const HeadingComponent = () => (
    <div id="container">
        <h2>
            {number+23}
        </h2>
        {element}
        {Title()}
        <Title></Title>
        <Title/>
        {headingElement}
        <h1 className="heading">React Functional Component heading</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);