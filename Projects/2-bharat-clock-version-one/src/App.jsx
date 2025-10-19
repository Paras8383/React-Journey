import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'

function App() {
  return (<div>
    <ClockHeading/>
    <ClockSlogan/>
    <CurrentTime/>
    </div>
  )
}

export default App
