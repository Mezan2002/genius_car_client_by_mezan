import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Location from "../Location/Location";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Location></Location>
    </div>
  );
};

export default Home;
