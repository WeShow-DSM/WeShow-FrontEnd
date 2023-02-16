import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import StyleProvider from "./styles";

function App() {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element />
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
}

export default App;
