import { useState, useEffect } from "react";
import { menuURL } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    
    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const data = await fetch(menuURL + resId);
        const json = await data.json();
        
        setResInfo(json.data)
    };
    return resInfo
};

export default useRestaurantMenu;