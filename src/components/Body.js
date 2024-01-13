import ResturantCard from "./ResturantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
    
const Body = () => {

    const [resList, setList] = useState([]);
    const [filteredResturant, setFilteredResturant] = useState([]);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3457176&lng=78.55222959999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json)
        setList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResturant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    return resList==0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <input type="search" className="search-box" value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)

                }}/>
                <button className="search-button"
                    onClick={() => {
                        const filteredRes = resList.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredResturant(filteredRes)
                    }}>
                    Search
                </button>
                <button className="filter-btn" onClick={() => { 
                    //Filter
                    const filteredList = resList.filter(res =>  res.info.avgRating > 4.3 )
                    setFilteredResturant(filteredList);
                 }}>
                    Top Rated Resturants
                </button>
            </div>
            <div className="res-container">
                {filteredResturant.map((resturant) => (
                    <Link
                        key={resturant.info.id}
                        to={"/resturants/" + resturant.info.id}>
                        <ResturantCard resData={resturant} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;