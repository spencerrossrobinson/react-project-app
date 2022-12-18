import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import RandomPage from "./pages/RandomPage";
import DirectoryPage from "./pages/DirectoryPage";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen grid grid-cols-3">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="directory" element={<DirectoryPage />} />
        <Route path="random" element={<RandomPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
