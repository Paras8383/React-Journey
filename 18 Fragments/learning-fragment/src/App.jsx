import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let foodItems =['Dal','Green Vegetables','Roti','Egg','Milk']
  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.map((item) => <li key={item} className="list-group-item">{item}</li>)}
      </ul>
    </React.Fragment>
  )
}

export default App
