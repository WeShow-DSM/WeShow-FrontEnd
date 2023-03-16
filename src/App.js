import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import StyleProvider from "./styles";
import FirstPage from "./pages/first";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Main from "./pages/main";
import Detail from "./pages/detailProduct";
import CreateProduct from "./pages/createProduct";

function App() {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={<Main />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
}

export default App;
