import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContactForm from "./components/EditContactForm";
import ContactDetails from "./components/ContactDetails";

const App:React.ComponentType = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContactForm />} />
        <Route path="/details/:id" element={<ContactDetails />} />

      </Routes>
      <ToastContainer position="bottom-right" />
    </Router>
  );
};

export default App;




