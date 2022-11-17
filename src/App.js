import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import RegisterPage from "./Components/Register/RegisterPage";
import Admin from "./Components/Admin/Admin";
import Home from "./Components/Home/Home";

import AddBook from "./Components/AddBook/AddBook";
import Edit from "./Components/Admin/Edit";
import Checkout from "./Components/UserCheckout/Checkout";
import NotFound from "./NotFound";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="signup" element={<RegisterPage />} />
          <Route path="login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="addbook" element={<AddBook />} />
          <Route path="/admin/edit/:bookId" element={<Edit />} />
          <Route path="/orders" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
