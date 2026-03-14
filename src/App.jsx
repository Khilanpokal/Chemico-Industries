import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import WhyChooseUs from './pages/WhyChooseUs';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        {/* ── TEMPORARY: Show 404 on all pages ── */}
        <Route path="*" element={<NotFound />} />

        {/* ── RESTORE: Uncomment below & remove the line above when ready ──
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/products" element={<Layout><Product /></Layout>} />
        <Route path="/why-us" element={<Layout><WhyChooseUs /></Layout>} />
        <Route path="/contact" element={<Layout><ContactUs /></Layout>} />
        <Route path="*" element={<NotFound />} />
        ── END RESTORE ── */}
      </Routes>
    </Router>
  );
}

export default App;
