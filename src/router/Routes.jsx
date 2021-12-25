import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Follow from "../pages/follow/Follow";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword";
import Timeline from "../pages/timeline/Timeline";
import User from "../pages/user/User";
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
        <Route path="/timeline" element={<PrivateRoute element={Timeline} />} />
        <Route path="/follow" element={<PrivateRoute element={Follow} />} />
        <Route path="/user/:id" element={<PrivateRoute element={User} />} />
        <Route path="/" element={<PrivateRoute element={Home} />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
