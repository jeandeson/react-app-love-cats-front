import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../../services/authService";

const authService = new AuthService();

export function PublicRoute({ element: Element }) {
  const [isValidUser, setIsvalidUser] = useState(false);

  useEffect(() => {
    const handleSetValidUser = () => {
      const valid = authService.handleValidateUser();
      if (valid != null) {
        setIsvalidUser(true);
      } else {
        setIsvalidUser(false);
      }
    };
    handleSetValidUser();
  }, []);

  return !isValidUser === true ? <Element /> : <Navigate to="/" />;
}
