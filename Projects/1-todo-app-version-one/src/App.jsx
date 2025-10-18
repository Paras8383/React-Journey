import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'

function App() {
  return <center class="todo-container">
    <AppName/>
    <div class="container text-center">
  <AddTodo/>

  <div class="row">
    <div class="col-6">
      Buy Milk
    </div>
    <div class="col-4">
     4/10/2023
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </div>

  <div class="row">
    <div class="col-6">
      Go to college
    </div>
    <div class="col-4">
     4/10/2023
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </div>
</div>
  
  </center>
}

export default App
