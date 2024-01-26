import { useState, useEffect } from "react";

const useResturantData = () => {

    const [resData, setResData] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3457176&lng=78.55222959999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setResData(json)
    };
    return resData
};

export default useResturantData;