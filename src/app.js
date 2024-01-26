import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import ResturantMenu from "./components/ResturantMenu";
import { Suspense, lazy } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

const About = lazy(() => {
    import("./components/About")
})

const AppLayout = () => {

    const [userName, setUserName] = useState();

    // useEffect(() => {
    //     const data = {
    //         name: "Abhinay"
    //     }
    //     setUserName(data.name)
    // })

    return <div className="app">
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <Header />
            <Outlet />
        </UserContext.Provider>
    </div>
};

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
            path: "/",
            element: <Body />,
            },
            {
            path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}>
                    <About />
                </Suspense>,
            },
            {
            path: "/contact",
            element: <Contact />,
            },
            {
            path: "/resturants/:resId",
            element: <ResturantMenu/>    
            }       
         ],
        errorElement: <Error/>
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);