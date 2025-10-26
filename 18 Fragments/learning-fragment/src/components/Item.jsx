import styles from "./Item.module.css"

function Item(props){
    return(<>
        <li className={`list-group-item ${props.bought && 'active'}`}><span>{props.foodItems}</span></li>
        <button className={`${styles.button} btn btn-info`}
         onClick={props.handleBuyButton}>
            Buy</button>
        </>
    )
}

export default Item;