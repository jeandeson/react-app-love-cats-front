import React from "react";
import Profile from "../../components/profile/Profile";
import { useParams } from "react-router";

const User = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Profile />
    </>
  );
};

export default User;
