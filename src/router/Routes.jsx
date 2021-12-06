import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { PrivateRoute } from "./private/routes";
import { PublicRoute } from "./public/routes";

const MyRoutes = () => {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/login" element={<PublicRoute element={Login} />} />
        <Route path="/register" element={<PublicRoute element={Register} />} />
        <Route path="/ForgotPassword" element={<PublicRoute element={ForgotPassword} />} />
        <Route path="/" element={<PrivateRoute element={Home} />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
