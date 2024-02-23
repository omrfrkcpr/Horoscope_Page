import "./App.scss";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Card from "./components/main/Card";
import Footer from "./components/footer/Footer";
import Slider from "./components/slider/Slider";

const App = () => {
  //? it should return only one div. But inside it it can be lots of divs !
  return (
    <div>
      <Navbar />
      <Slider />
      <Header />
      <Card />
      <Footer />
    </div>
  );
};

export default App;

//* Initial function
// rfce // expression
// rafce // arrow
