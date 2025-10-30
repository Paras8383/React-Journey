import { TodoItemsContext } from "../store/todo-items-store";
import { useContext} from 'react'
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css"

function TodoItems(){
    const contextObj = useContext(TodoItemsContext);
    const todoItems = contextObj.todoItems
    

 return <div className={styles.itemsContainer}>
    {todoItems.map((item) => <TodoItem todoName={item.name} todoDate={item.dueDate} ></TodoItem>)}
    </div>
}

export default TodoItems;