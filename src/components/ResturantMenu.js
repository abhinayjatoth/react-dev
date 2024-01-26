import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { menuURL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuData from "./MenuData";

const ResturantMenu = () => {
    const [showIndex, setShowIndex] = useState(0);
    const params = useParams();
    const { resId } = params;
    const menuData = useRestaurantMenu(resId);

    if (menuData === null) {
        return <Shimmer/>
    }

    const { name } = menuData?.cards[0]?.card?.card?.info;
    const cards = menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    const filteredCards = cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(filteredCards)
    return (
        <div className="text-center p-2 m-2">
            <h1 className="font-bold my-10 text-2xl">
                {name}
            </h1>
            <h2 className="text-lg font-bold">Menu</h2>
            {filteredCards.map(
                (category, index) => (
                    <MenuData
                        key={index}
                        data={category?.card?.card}
                        showItems={index === showIndex ? true : false}
                        setIndex = {()=> setShowIndex(index)}
                    />)
            )}
        </div>
    )
}
//<span className="flex text-center">{console.log(category?.card?.card)}</span>
export default ResturantMenu;