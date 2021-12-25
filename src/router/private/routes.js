import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function PrivateRoute({ element: Element }) {
  const [isValidUser, setIsvalidUser] = useState(true);
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
  return isValidUser === true ? <Element /> : <Navigate to="/login" />;
}
