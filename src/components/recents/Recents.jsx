import React from "react";
import "./Recents.css";
import { useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { useSelector } from "react-redux";
import Button from "../../components/form/button/Button";

const Recents = () => {
  const [loadAll, setLoadAll] = useState(false);
  const cats = useSelector((state) => state.cat);
  const filtredCats = cats.filter((cat, index) => index < 5);

  const setLoad = () => {
    setLoadAll(true);
  };
  return (
    <>
      {loadAll === false ? (
        <>
          <ul className="cats-recents">{cats && filtredCats.map((cat) => <RecentsCard key={cat.id} cat={cat} />)}</ul>
          <Button type={"text"} onClick={setLoad} text={"Load All"} />
        </>
      ) : (
        <ul className="cats-recents">{cats && cats.map((cat) => <RecentsCard key={cat.id} cat={cat} />)}</ul>
      )}
    </>
  );
};

function RecentsCard({ cat }) {
  return (
    <li>
      <div
        style={{
          backgroundImage: `url(${cat.cat_image})`,
        }}
        className="recents-info"
      ></div>
      <div>
        <span className="cat-name">{cat.cat_name}</span>
      </div>
      {/* <div>
   <span className="cat-info">Brand: </span>
   <span className="cat-info">Bower</span>
 </div> */}
      <div>
        <span className="cat-info">Color:</span>
        <span className="cat-info">{cat.color}</span>
      </div>
      <div>
        <span className="cat-info">Gender: </span>
        <span className="cat-info">{cat.genere}</span>
      </div>
      <HiOutlineHeart />
    </li>
  );
}

export default Recents;
