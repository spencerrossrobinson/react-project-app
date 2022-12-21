import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import RandomPage from "./pages/RandomPage";
import DirectoryPage from "./pages/DirectoryPage";
import FrancePage from "./pages/FrancePage";

function App() {
  return (
    <div className="App bg-gray-200 min-h-screen grid grid-cols-6">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:homeId" element={<DirectoryPage />} />
        <Route path="/:homeId/:worldId" element={<FrancePage />} />
        <Route path="/2" element={<ContactPage />} />
        <Route path="/1" element={<RandomPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
