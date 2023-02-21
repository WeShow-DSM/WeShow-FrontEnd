import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import StyleProvider from "./styles";
import FirstPage from "./pages/first";
import Login from "./pages/login";
import SignUp from "./pages/signup";

function App() {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
}

export default App;
