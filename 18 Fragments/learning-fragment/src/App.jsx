import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {

  let [textToShow, setTextState] = useState("Food Items entered by user");

  let [foodItems, setFoodItems] = useState([])


  const onKeyDown = (event)=>{
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("New food item entered is: " + newFoodItem)
    }
  }
  return (
    <>
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <ErrorMessage items = {foodItems}></ErrorMessage>
      <FoodItems items = {foodItems}></FoodItems>
    </Container>

    <Container>
      <p>Above is the list of healthy foods which are necessaey or your good health and well being</p>
    </Container>
    </>
  );
}

export default App;
