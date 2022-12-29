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
import Paradiso from "./bars/Paradiso";
import Dr from "./bars/Dr";
import Solange from "./bars/Solange";
import Lat from "./bars/Lat";
import Cure from "./bars/Cure";
import Roose from "./bars/Roose";
import Dead from "./bars/Dead";
import Company from "./bars/Company";
import Apotheke from "./bars/Apotheke";
import Esca from "./bars/Esca";
import Lost from "./bars/Lost";
import Amnesia from "./bars/Amnesia";

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
        <Route path="/1/0" element={<Paradiso />} />
        <Route path="/1/1" element={<Dr />} />
        <Route path="/1/2" element={<Solange />} />
        <Route path="/1/6" element={<Lat />} />
        <Route path="/1/7" element={<Cure />} />
        <Route path="/1/8" element={<Roose />} />
        <Route path="/1/9" element={<Dead />} />
        <Route path="/1/10" element={<Company />} />
        <Route path="/1/11" element={<Apotheke />} />
        <Route path="/1/12" element={<Esca />} />
        <Route path="/1/13" element={<Lost />} />
        <Route path="/1/14" element={<Amnesia />} />
        <Route path="/1" element={<RandomPage />} />
        <Route path="/0/2" element={<SpainPage />} />
        <Route path="/0/1" element={<UsaPage />} />
        <Route path="/0/2/0" element={<BarcelonaPage />} />
        <Route path="/0/2/0/0" element={<Paradiso />} />
        <Route path="/0/2/0/1" element={<Dr />} />
        <Route path="/0/2/0/2" element={<Solange />} />
        <Route path="/0/2/2" element={<IbizaPage />} />
        <Route path="/0/2/2/0" element={<Esca />} />
        <Route path="/0/2/2/1" element={<Lost />} />
        <Route path="/0/2/2/2" element={<Amnesia />} />
        <Route path="/0/1/1" element={<NewPage />} />
        <Route path="/0/1/1/0" element={<Lat />} />
        <Route path="/0/1/1/1" element={<Cure />} />
        <Route path="/0/1/1/2" element={<Roose />} />
        <Route path="/0/1/0" element={<YorkPage />} />
        <Route path="/0/1/0/0" element={<Dead />} />
        <Route path="/0/1/0/1" element={<Company />} />
        <Route path="/0/1/0/2" element={<Apotheke />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
