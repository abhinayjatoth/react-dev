import { resURL } from "../utils/constants";

export const ResturantCard = ({ resData }) => {
    const {name,cuisines, avgRating, sla } = resData?.info
    return (
        <div className="res-card" style={{
    backgroundColor : "#f0f0f0"
}}>
            <img className="res-logo" alt="res-logo" src={ resURL+
                resData.info.cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{"Rating "+avgRating}</h4>
            <h4>{"Delivery in "+sla?.deliveryTime+" mins"}</h4> {/* Optional chaining */}
        </div>
    );
}


export default ResturantCard;