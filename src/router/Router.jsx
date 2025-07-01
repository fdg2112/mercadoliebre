import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home.jsx";
import Register from "../views/Register.jsx";
import Login from "../views/Login.jsx";
import NotFound from "../views/NotFound.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }