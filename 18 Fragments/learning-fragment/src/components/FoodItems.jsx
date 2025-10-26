import Item from "./Item";
import { useState } from "react"; 
function FoodItems({ items }){
    let [activeItems, setActiveItems] = useState([]);
    const onBuyButton = (event, item)=>{
        let newItems = [...activeItems, item];
        setActiveItems(newItems);
    }
    return(
        <ul className="list-group">
             {items.map((item) => 
             <Item key={item} foodItems={item} 
             handleBuyButton ={(event) => onBuyButton(event, item)}
             bought = {activeItems.includes(item)}></Item>
            )}
                
        </ul>
    )
}

export default FoodItems;