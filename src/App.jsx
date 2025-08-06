import React from 'react'
import WhatsAppRedirect from './components/whatsappDirect'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DomainQR from './components/domainQr';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/go" element={<WhatsAppRedirect />} />
      </Routes>
    </Router>
    <DomainQR />
    </>
  )
}

export default App
