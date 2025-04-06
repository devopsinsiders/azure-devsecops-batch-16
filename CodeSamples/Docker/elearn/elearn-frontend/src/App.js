import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AddNewCourse from './pages/AddNewCourse';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/add-course" element={<AddNewCourse />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
