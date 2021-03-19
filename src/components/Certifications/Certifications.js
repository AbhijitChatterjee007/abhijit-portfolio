import React, { useContext, useEffect } from "react";
import PortfolioContext from "../../context/context";
import Slider from "../Slider/Slider";

function Certificates() {
  const { certificates } = useContext(PortfolioContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="certifications">
      <Slider array={certificates} showIcons = {true}/>
    </section>
  );
}

export default Certificates;
