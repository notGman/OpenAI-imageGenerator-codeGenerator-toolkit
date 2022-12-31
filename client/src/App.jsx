import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";
import ImageGenerator from "../components/Image_Generator/Image_generator";
import Chatbot from "../components/Chat_Bot/Chatbot";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<ImageGenerator />} />
        <Route path="/chat" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
