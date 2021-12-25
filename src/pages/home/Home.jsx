import React, { useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Recents from "../../components/recents/Recents";
import Info from "../../components/info/Info";
import { removeHideEffect } from "../../generics/useHideEffect";
import CatService from "../../services/catService";
import { useDispatch } from "react-redux";
import { storeCats } from "../../redux/actions/cat/catActions";

const Home = () => {
  const catService = new CatService();
  const dispatch = useDispatch();

  useEffect(() => {
    async function handlestoreCats() {
      const { data } = await catService.getAll();
      dispatch(storeCats(data));
    }
    removeHideEffect();
    handlestoreCats();
  });

  return (
    <>
      <Hero />
      <Info />
      <Recents />
    </>
  );
};

export default Home;
