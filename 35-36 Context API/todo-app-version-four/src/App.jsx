import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
import TodoItems from './components/TodoItems'
import { TodoItemsContext } from './store/todo-items-store'
function App() {
  // const todoItems = [{
  //   name:'Buy Milk',
  //   dueDate: '4/10/2023'
  // },
  // {
  //   name: 'Go to college',
  //   dueDate: '4/10/2023'
  // }]

  const [todoItems, setTodoItem] = useState([])

  const addNewItem = (todoText, todoDate) => {
    let newTodo = [...todoItems,{name:todoText, dueDate: todoDate}]
    setTodoItem(newTodo);
  }

  const deleteItem = (todoText) =>{
    let newTodoItems = todoItems.filter(item => item.name !== todoText);
    setTodoItem(newTodoItems);
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
