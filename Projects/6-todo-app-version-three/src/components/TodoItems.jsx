import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css"

function TodoItems({todoItems, onDeleteButton}){
 return <div className={styles.itemsContainer}>
    {todoItems.map((item) => <TodoItem todoName={item.name} todoDate={item.dueDate} onDeletebutton={onDeleteButton}></TodoItem>)}
    </div>
}

export default TodoItems;