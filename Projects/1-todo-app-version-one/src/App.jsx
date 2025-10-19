import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import Task1 from './components/task1'
import Task2 from './components/task2'
function App() {
  return (<center className="todo-container">
    <AppName/>
    <AddTodo/>
    <div className="items-container">
      <Task1/> 
      <Task2/> 
    </div>
    
  </center>)
}

export default App
