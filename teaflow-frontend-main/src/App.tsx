import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <HomePage />
      </main>
      <Footer />
    </>
  )
}

export default App
