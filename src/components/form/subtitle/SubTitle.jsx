import React from "react";

const SubTitle = ({ Title, color = "#4d4751" }) => {
  return <p style={{ color: color }}>{Title}</p>;
};

export default SubTitle;
