import Item from "./Item";

function FoodItems({ items }){
    let foodItems = ["dal", "ghee", "rice", "chicken"];
    return(
        <ul className="list-group">
             {items.map((item) => 
             <Item key={item} foodItems={item}></Item>
            )}
                
        </ul>
    )
}

export default FoodItems;