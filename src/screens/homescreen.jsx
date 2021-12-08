import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Fotter from "../components/Fotter";
import Navbar from "../components/navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Homescreen = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Fotter />
    </div>
  );
};

export default Homescreen;
