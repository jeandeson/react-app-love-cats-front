import React from "react";
import "./Recents.css";
import { HiOutlineHeart } from "react-icons/hi";
import img1 from "../../assets/images/cat2.png";
import img2 from "../../assets/images/cat3.png";
import img3 from "../../assets/images/cat4.png";
import img4 from "../../assets/images/cat5.png";
import img5 from "../../assets/images/cat6.png";

const Recents = () => {
  return (
    <ul className="cats-recents">
      <li>
        <div
          style={{
            backgroundImage: `url(${img1})`,
          }}
          className="recents-info"
        ></div>
        <div>
          <span className="cat-name">Jorge</span>
        </div>
        <div>
          <span className="cat-info">Brand: </span>
          <span className="cat-info">Bower</span>
        </div>
        <div>
          <span className="cat-info">Color: </span>
          <span className="cat-info">Gray</span>
        </div>
        <div>
          <span className="cat-info">Gender: </span>
          <span className="cat-info">Female</span>
        </div>
        <HiOutlineHeart />
      </li>
      <li>
        <div
          style={{
            backgroundImage: `url(${img2})`,
          }}
          className="recents-info"
        ></div>
        <div>
          <span className="cat-name">Jorge</span>
        </div>
        <div>
          <span className="cat-info">Brand: </span>
          <span className="cat-info">Bower</span>
        </div>
        <div>
          <span className="cat-info">Color: </span>
          <span className="cat-info">Gray</span>
        </div>
        <div>
          <span className="cat-info">Gender: </span>
          <span className="cat-info">Female</span>
        </div>
        <HiOutlineHeart />
      </li>
      <li>
        <div
          style={{
            backgroundImage: `url(${img3})`,
          }}
          className="recents-info"
        ></div>
        <div>
          <span className="cat-name">Jorge</span>
        </div>
        <div>
          <span className="cat-info">Brand: </span>
          <span className="cat-info">Bower</span>
        </div>
        <div>
          <span className="cat-info">Color: </span>
          <span className="cat-info">Gray</span>
        </div>
        <div>
          <span className="cat-info">Gender: </span>
          <span className="cat-info">Female</span>
        </div>
        <HiOutlineHeart />
      </li>
      <li>
        <div
          style={{
            backgroundImage: `url(${img4})`,
          }}
          className="recents-info"
        ></div>
        <div>
          <span className="cat-name">Jorge</span>
        </div>
        <div>
          <span className="cat-info">Brand: </span>
          <span className="cat-info">Bower</span>
        </div>
        <div>
          <span className="cat-info">Color: </span>
          <span className="cat-info">Gray</span>
        </div>
        <div>
          <span className="cat-info">Gender: </span>
          <span className="cat-info">Female</span>
        </div>
        <HiOutlineHeart />
      </li>
      <li>
        <div
          style={{
            backgroundImage: `url(${img5})`,
          }}
          className="recents-info"
        ></div>
        <div>
          <span className="cat-name">Jorge</span>
        </div>
        <div>
          <span className="cat-info">Brand: </span>
          <span className="cat-info">Bower</span>
        </div>
        <div>
          <span className="cat-info">Color: </span>
          <span className="cat-info">Gray</span>
        </div>
        <div>
          <span className="cat-info">Gender: </span>
          <span className="cat-info">Female</span>
        </div>
        <HiOutlineHeart />
      </li>
      <li>
        <div
          style={{
            backgroundImage: `url(${img1})`,
          }}
          className="recents-info"
        ></div>
        <div>
          <span className="cat-name">Jorge</span>
        </div>
        <div>
          <span className="cat-info">Brand: </span>
          <span className="cat-info">Bower</span>
        </div>
        <div>
          <span className="cat-info">Color: </span>
          <span className="cat-info">Gray</span>
        </div>
        <div>
          <span className="cat-info">Gender: </span>
          <span className="cat-info">Female</span>
        </div>
        <HiOutlineHeart />
      </li>
    </ul>
  );
};

export default Recents;
