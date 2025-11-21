import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/container";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";
function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
    <center className="px-4 py-5 my-5 text-center">
    <Container>
    <Header></Header>       
        {" "}
        <h1 className="display-5 fw-bold text-body-emphasis">
          Centered hero
        </h1>{" "}
        <div className="col-lg-6 mx-auto">
          {" "}
          {privacy ? <PrivacyMessage/> : <DisplayCounter/>}
          <Controls/>
        </div>{" "}     
      </Container>
      </center> 
    </>
  );
}

export default App;
