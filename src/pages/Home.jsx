import React from "react";
import Slider from "../components/Slider";
import MenClothing from "../components/MenClothing";
import WomenClothing from "../components/WomenClothing";
import Electronics from "../components/Electronics";
import Jwellery from "../components/Jwellery";

const Home = () => {
  return (
    <div className="min-h-screen container mx-auto px-2 lg:px-6 xl:px-0">
      <div className="relative -z-10">
        <Slider />
      </div>
      <MenClothing />
      <WomenClothing />
      <Electronics />
      <Jwellery />
    </div>
  );
};

export default Home;
