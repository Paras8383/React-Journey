import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = ["dal", "ghee", "rice", "chicken"];
  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ErrorMessage items = {foodItems}></ErrorMessage>
      <FoodItems items = {foodItems}></FoodItems>
    </React.Fragment>
  );
}

export default App;
