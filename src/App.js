import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userReducer";
import Header from "./components/commons/Header";
import Home from "./pages/Home";
import Eleves from "./pages/Eleves";
import Members from "./pages/Members";
import Projet2022 from "./pages/Projet2022";
import Statuts from "./pages/Statuts";
import Activites from "./pages/Activites";
import Actionnaires from "./pages/Actionnaires";
import NotFound from "./pages/NotFound";
import Denied from "./pages/Denied";
import User from "./pages/User"
import Footer from "./components/commons/Footer";
import ActionnairesListPdf from "./pages/ActionnairesListPdf";

const App = () => {
  const user = useSelector(selectUser)

  return (
    <div className="app">
      <Header/>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Home />} />
        <Route path="/liste-des-eleves" exact element={<Eleves />} />
        <Route path="/liste-des-membres" exact element={<Members />} />
        <Route path="/projet2022" exact element={<Projet2022 />} />
        <Route path="/statuts" exact element={<Statuts />} />
        <Route path="/activites" exact element={<Activites />} />
        <Route path="/actionnaires" exact element={<Actionnaires />} />
        <Route path="/profil" element={<User profil='profil' />} />
        <Route path="/logout" element={<Home />} />
        <Route path="/login" element={user? <Home /> : <User login='login' />} />
        <Route path="/register" element={<User register='register' />} />
        <Route path="/password_forget" element={<User password_forget='password_forget' />} />
        <Route path="/acces-denied" element={<Denied />} />
        <Route path="/actionnaires-list-pdf" element={<ActionnairesListPdf />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
