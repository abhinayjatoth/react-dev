import { useContext } from "react";
import { resURL } from "../utils/constants";
import UserContext from "../utils/UserContext";

export const ResturantCard = ({ resData }) => {
    const { name, cuisines, avgRating, sla } = resData?.info
    
    const {loggedInUser} = useContext(UserContext)
    return (
        <div className="res-card hover:bg-gray-200 shadow-xl m-2 p-4 w-[250px] rounded-lg h-[400px]" >
            <img className="res-logo size-[200px] rounded-lg" alt="res-logo" src={ resURL+
                resData.info.cloudinaryImageId} />
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{"Rating "+avgRating}</h4>
            <h4>{"Delivery in " + sla?.deliveryTime + " mins"}</h4> {/* Optional chaining */}
            <h4>{ loggedInUser}</h4>
        </div>
    );
}


//Use camel case for higher order function
export const openResturantCard = () => {
    return (props) => {
        return (
            <div>
                <label className=" absolute bg-green-900 rounded-md text-white" >Open</label>
                <ResturantCard {...props} />
            </div>
        );
    };
};

export default ResturantCard;