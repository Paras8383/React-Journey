import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
import TodoItems from './components/TodoItems'
import { TodoItemsContext } from './store/todo-items-store'

const todoItemsReducer =(currTodoItems,action) => {
  let newTodoItems = currTodoItems;
  if(action.type === 'NEW_ITEM'){
    newTodoItems = [...currTodoItems,{name:action.payload.todoText, dueDate: action.payload.todoDate}]
  }
  else if(action.type === 'DELETE_ITEM'){
    newTodoItems = currTodoItems.filter(item => item.name !== action.payload.todoText);
  }
  return newTodoItems;
}

function App() {

  // const [todoItems, setTodoItem] = useState([])
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, [])

  const addNewItem = (todoText, todoDate) => {
    const newItemAction = {
      type: 'NEW_ITEM',
      payload: {
        todoText,
        todoDate
      }
    }
    dispatchTodoItems(newItemAction)
  }

  const deleteItem = (todoText) =>{
    const deleteItemAction = {
      type: 'DELETE_ITEM',
      payload: {
        todoText
      }
    }
    dispatchTodoItems(deleteItemAction)
  }

  
  return (
  <TodoItemsContext.Provider value={{todoItems: todoItems,
    addNewItem: addNewItem,
    deleteItem: deleteItem
  }}>
  <center className="todo-container">
    <AppName/>
    <AddTodo/>
    <TodoItems/>
    
  </center>
  </TodoItemsContext.Provider>)
}

export default App
