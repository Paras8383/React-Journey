import styles from "./FoodInput.module.css"

function FoodInput(props){
return <input type="text" placeholder="Enter food name here" className={styles.foodInput} 
onChange={props.handleOnChange}/>
}

export default FoodInput;