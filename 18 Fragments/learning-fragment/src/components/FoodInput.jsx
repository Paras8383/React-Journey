import styles from "./FoodInput.module.css"

function FoodInput(props){
return <input type="text" placeholder="Enter food name here" className={styles.foodInput} 
onKeyDown={props.handleKeyDown}/>
}

export default FoodInput;