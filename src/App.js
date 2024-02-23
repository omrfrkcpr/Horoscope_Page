import "./App.scss";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/main/Main";
import { data } from "../src/helper/data";
import Module from "./components/module/Module";

const App = () => {
  //? it should return only one div. But inside it it can be lots of divs !
  return (
    <div>
      <Navbar />
      <Slider />
      <Header />
      <Main dataChild={data} />
      <Module dataChild={data} />
    </div>
  );
};

export default App;

//* Initial function
// rfce // expression
// rafce // arrow
