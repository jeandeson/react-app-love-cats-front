import React, { useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Recents from "../../components/recents/Recents";
import Info from "../../components/info/Info";
import { removeHideEffect } from "../../generics/useHideEffect";

const Home = () => {
  useEffect(() => {
    removeHideEffect();
  }, []);

  return (
    <>
      <Hero />
      <Info />
      <Recents />
    </>
  );
};

export default Home;
