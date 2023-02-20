import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import StyleProvider from "./styles";
import FirstPage from "./pages/first";

function App() {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
}

export default App;
