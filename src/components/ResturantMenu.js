import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { menuURL } from "../utils/constants";

const ResturantMenu = () => {

    const [menuData, setMenuData] = useState(null);
    const params = useParams();
    const { resId } = params;

    useEffect(() => {
        fetchResturant();
    }, []);
    
    const fetchResturant = async () => {
        const data = await fetch(menuURL+resId);
        const json = await data.json();

        setMenuData(json.data)
    }


    if (menuData === null) {
    return <Shimmer/>
}
    const { name, id, avgRating, localory, costForTwoMessage } = menuData?.cards[0]?.card?.card?.info;
    const { itemCards } = menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;
    console.log(itemCards)

    return (
        <div className="menu">
            <h1>
                {name}
            </h1>
            <h2>Menu</h2>
            <ol>
                {itemCards.map(item => <li key={id}>{item.card.info.name} - { "Rs: "+item.card.info.price}</li>)}
            </ol>
        </div>
    )
}

export default ResturantMenu;