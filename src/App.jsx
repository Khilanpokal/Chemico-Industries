import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import WhyChooseUs from './pages/WhyChooseUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/products" element={<Layout><Product /></Layout>} />
        <Route path="/why-us" element={<Layout><WhyChooseUs /></Layout>} />
        <Route path="/contact" element={<Layout><ContactUs /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
