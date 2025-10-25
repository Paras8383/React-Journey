import styles from "./Item.module.css"

function Item(props){
    const handleBuyButtonClicked = (foodItem)=>{
        console.log(`${props.foodItems} being bought`)
    }
    return(<>
        <li className="list-group-item"><span>{props.foodItems}</span></li>
        <button className={`${styles.button} btn btn-info`}
         onClick={() => handleBuyButtonClicked(props.foodItems)}>
            Buy</button>
        </>
    )
}

export default Item;