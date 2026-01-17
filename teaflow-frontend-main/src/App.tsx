import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import Features from './pages/Features'
import SalesModule from './pages/SalesModule'
import PaymentModule from './pages/PaymentModule'
import InventoryModule from './pages/InventoryModule'
import ReportsModule from './pages/ReportsModule'
import StaffModule from './pages/StaffModule'
import KitchenModule from './pages/KitchenModule'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/module/sales" element={<SalesModule />} />
          <Route path="/module/payment" element={<PaymentModule />} />
          <Route path="/module/inventory" element={<InventoryModule />} />
          <Route path="/module/reports" element={<ReportsModule />} />
          <Route path="/module/staff" element={<StaffModule />} />
          <Route path="/module/kitchen" element={<KitchenModule />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
