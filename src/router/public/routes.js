import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function PublicRoute({ element: Element }) {
  const [isValidUser, setIsvalidUser] = useState(false);
  const userInfo = useSelector((state) => state.auth);

  useEffect(() => {
    const handleSetValidUser = () => {
      if (userInfo.token != null || userInfo.token !== undefined) {
        setIsvalidUser(true);
      } else {
        setIsvalidUser(false);
      }
    };
    handleSetValidUser();
  });

  return !isValidUser === true ? <Element /> : <Navigate to="/" />;
}
