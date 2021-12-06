import React from "react";
import ReactLoading from "react-loading";
import "./Loading.css";

const Loading = ({ type, color }) => {
  return (
    <>
      <div
        className="loading-modal"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReactLoading type={type} color={"#6504B5"} height={400} width={200} />
      </div>
    </>
  );
};

export default Loading;
