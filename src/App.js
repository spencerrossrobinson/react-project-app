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
import ParisPage from "./pages/ParisPage";
import SpainPage from "./pages/SpainPage";
import BarcelonaPage from "./pages/BarcelonaPage";
import LittleRedDoor from "./bars/LittleRedDoor";
import Background from "./components/Background";
import TigerBar from "./bars/TigerBar";
import PrescClub from "./bars/PrescClub";
import UsaPage from "./pages/UsaPage";
import NewPage from "./pages/NewPage";
import YorkPage from "./pages/YorkPage";
import IbizaPage from "./pages/IbizaPage";

function App() {
  return (
    <div className="App bg-gray-200 min-h-screen grid grid-cols-6">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/0" element={<DirectoryPage />} />
        <Route path="/0/0" element={<FrancePage />} />
        <Route path="/0/0/0" element={<ParisPage />} />
        <Route path="/0/0/0/0" element={<LittleRedDoor />} />
        <Route path="/0/0/0/1" element={<TigerBar />} />
        <Route path="/0/0/0/2" element={<PrescClub />} />
        <Route path="/2" element={<ContactPage />} />
        <Route path="/1/3" element={<LittleRedDoor />} />
        <Route path="/1/4" element={<TigerBar />} />
        <Route path="/1/5" element={<PrescClub />} />
        <Route path="/1" element={<RandomPage />} />
        <Route path="/0/2" element={<SpainPage />} />
        <Route path="/0/1" element={<UsaPage />} />
        <Route path="/0/2/0" element={<BarcelonaPage />} />
        <Route path="/0/2/2" element={<IbizaPage />} />
        <Route path="/0/1/1" element={<NewPage />} />
        <Route path="/0/1/0" element={<YorkPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
