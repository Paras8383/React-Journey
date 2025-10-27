import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'

function App() {

  let [calVal, setCalVal] = useState("")
  const onButtonClick = (buttonText)=>{
    if(buttonText === "C"){
      setCalVal("");
    }else if(buttonText === '='){
      const result = eval(calVal);
      setCalVal(result)
    }else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue)
    }
  }
  return (
    <>
    <div id="calculator" className={styles.calculator}>
        <Display displayVal = {calVal}/>  
        <ButtonsContainer onButtonClick = {onButtonClick}/>
    </div>
    </>
  )
}

export default App
