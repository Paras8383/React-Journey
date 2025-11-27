import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Foooter";
import HomeItem from "../components/HomeItem";
import { Outlet } from "react-router-dom";

function App() {
  
  return (
    <>
      <div>
        <Header />
        <Outlet></Outlet>
        <Footer />
      </div>
    </>
  );
}

export default App;
