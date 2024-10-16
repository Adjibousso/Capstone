import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/NavBar';
import "./App.css"
import { FaRibbon, FaSearch } from 'react-icons/fa';
import Home from "./pages/Home";
import Register from './components/Register';
import Cart from './pages/Cart';
import Signin from './components/Signin';
import Infos from "./pages/Info";
import Asia from "./pages/Asia"
import Afrique from "./pages/Afrique"
import Shop from './pages/Shop';
import America from './pages/NorthAmerica';
import SearchResults from './components/SearchBar';
import Donation from './components/Donation';



function App() {
  

  return (
    <>
      {/* routes  */}
      <Router>
      <Navbar />
      
      <Routes>
      <Route path="/signin" element={<Signin/>} />
      <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Home />} />
        <Route path="/Infos" element={<Infos />} />
        <Route path="/Afrique" element={<Afrique />} />
        <Route path="/Asie" element={< Asia />} />
        <Route path="/Afrie" element={<Infos />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/NorthAmerica" element={<America />} />
        <Route path="/Donation" element={<Donation />} />


        {/* <Route path="/services" element={<Services />} />  */}
        {/* <Route path="/contact" element={<Contact />} />
         */}
      </Routes>
    </Router>
       
    </>
  )
}

export default App
