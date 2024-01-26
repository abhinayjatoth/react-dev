import FoodData from "./FoodData";
import { useState } from "react";


const MenuData = (data, showItems, setIndex) => {
    const handleClick = () => {
        setIndex();
    }
    console.log(data)
    return (
    <div>
        <div className="w-6/12 mx-auto my-2 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">
                    {data.data.title} ({data.data.itemCards.length})
                </span>
                <span>⬇️</span>
            </div>
            {showItems ? <FoodData menu={data.data.itemCards}/> : null}  
        </div>    
    </div>
)

}

export default MenuData