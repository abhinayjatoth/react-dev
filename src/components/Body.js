import ResturantCard, { openResturantCard } from "./ResturantCard";
import resObj from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

    
const Body = () => {

    const [resList, setList] = useState([]);
    const [filteredResturant, setFilteredResturant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();

    const ResturantCardOpen = openResturantCard(ResturantCard);

    const { loggedInUser, setUserName } = useContext(UserContext);

    // const json = useResturantData();
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3457176&lng=78.55222959999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
            console.log(json)
    setList(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResturant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if (onlineStatus === false) {
        return (
            <h2>
                Looks like offline
            </h2>
        )
    }

    return resList==0 ? <Shimmer/> : (
        <div className="body px-40 py-2 pl-30">
            <div className="filter flex items-center">
                <div>
                    <input type="search"
                    className="search-box shadow-lg rounded-md m-1 p-1 border border-solid border-black" value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)

                }}/>
                </div>
                <button
                    className="search-button px-4 py-2 shadow-md bg-blue-400 m-4 rounded-lg"
                    onClick={() => {
                        const filteredRes = resList.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredResturant(filteredRes)
                    }}>
                    Search
                </button>
                <div><button className="filter-btn px-4 py-2 shadow-md bg-blue-200 rounded-lg" onClick={() => { 
                    //Filter
                    const filteredList = resList.filter(res =>  res.info.avgRating > 4.3 )
                    setFilteredResturant(filteredList);
                 }}>
                    Top Rated Resturants
                </button></div>
                <div className="m-2 p-2"> userName : 
                    <input
                    className="search-box shadow-lg rounded-md m-1 p-1 border border-solid border-black"
                    value={loggedInUser}
                    onChange={(e) => setUserName(e.target.value)
                    } 
                    
                    />
                </div>
                
            </div>
            <div className="res-container flex flex-wrap">
                {filteredResturant.map((resturant) => (
                    <Link
                        key={resturant.info.id}
                        to={"/resturants/" + resturant.info.id}>
                        {resturant.info.isOpen ? (<ResturantCardOpen resData={resturant} />)
                            :
                        (<ResturantCard resData={resturant} />) }
                        
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;