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
  let foodItems = ["dal", "ghee", "rice", "chicken"];
  return (
    <>
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items = {foodItems}></ErrorMessage>
      <FoodInput></FoodInput>
      <FoodItems items = {foodItems}></FoodItems>
    </Container>

    <Container>
      <p>Above is the list of healthy foods which are necessaey or your good health and well being</p>
    </Container>
    </>
  );
}

export default App;
