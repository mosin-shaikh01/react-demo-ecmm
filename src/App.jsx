import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout' 
import Navbar from './components/Navbar'

/**
 * Root application component that renders the main navigation and page routing structure.
 * @returns {React.ReactElement} The application shell containing the navbar and route configuration.
 */
function App() {

  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/auth'  element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
    
    </>
  )
}

export default App
