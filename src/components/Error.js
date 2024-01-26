import { useRouteError } from "react-router-dom";

const Error = () => {
    const e = useRouteError();
    console.log(e)
    return (
        <div>
            <h1>Oops!!!</h1>
            <h2>Some Issue Occoured</h2>
            <p>{e.status+": "+e.statusText}</p>
        </div>
    )
}

export default Error;