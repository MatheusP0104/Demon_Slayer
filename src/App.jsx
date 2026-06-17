import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import HashiraList from './components/HashiraList'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import HashirasDetailPage from './pages/HashirasDetailPage'
import AboutPage from './pages/AboutPage'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/hashiras" element={<HashiraList/>} />
          <Route path="/hashiras/:id" element={<HashirasDetailPage/>} />
          <Route path="/sobre" element={<AboutPage/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
