import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/views/home/Home';
import AboutUs from './components/views/aboutUs/AboutUs';
import ContactUs from './components/views/contactUs/ContactUs';
import './styles/styles.scss';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  </Router>
);

export default App;
