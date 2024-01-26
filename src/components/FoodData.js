import { resURL } from "../utils/constants";


const FoodData = (menu) => {
    const itemsArray = menu.menu
    return (
        
        <div>
            
            {itemsArray.map((itemCard) => (
                <div key={itemCard.card.info.id} className="p-1 m-2 border-grey-200 border-b-2 text-left flex justify-between">
                    
                    <div className="w-10/12">
                        <div className="py-2"> 
                            <span className="p-3 text-left">{itemCard.card.info.name} -  </span>
                            <span className="p-3">${itemCard.card.info.price/1000}</span>
                        </div>  
                            <p className="text-xs text-left p-1 m-2">
                                {itemCard.card.info.description}
                            </p> 
                    </div>
                    <div className="w-2/12">
                        <div className="absolute">
                            <button className="p-1 bg-black text-white shadow-lg mx-10 my-14 rounded-md">Add +</button>
                        </div>
                        <img src={resURL + itemCard.card.info.imageId} className="w-35 rounded-xl" />
                    </div>
                        
                        
                    
                </div>
                
            
            ))}

        </div>
    )
}

export default FoodData;

{/* <div key={item.card.info.id}>
                    <div>
                        <span>{item.card.info.name}</span>
                        <span>{item.card.info.price}</span>
                    </div>
                </div> */}