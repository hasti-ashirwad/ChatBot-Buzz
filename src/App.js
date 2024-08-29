import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/global/Navbar';
import Footer from './component/global/Footer';
import Hero from './component/hero/Hero';
import Features from './component/features/Features';
import Payment from './component/payment/Payment';
import Channel from './component/channel/Channel';
import ContactUs from './component/contact/ContactUs';
import "./component/style/Comman.css";
import GoToTop from './component/gototop/GoToTop';

function App() {
  return (
    <Router>
      <Navbar />
      <GoToTop />
      <Routes>
        <Route path="/" element={
          <>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Hero />
            </div>
            <Features />
            <Payment />
            <Channel />
          </>
        } />

        <Route path="/contact" element={
          <>
            <ContactUs />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
