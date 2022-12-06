import './App.css'
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Contact from './components/Contact/Contact.jsx'
import Bio from './components/Bio/Bio.jsx'
import Shop from './components/Shop/Shop.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import NotFound from './components/NotFound/NotFound.jsx'

function App() {

  return (
    <div className="App">
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/bio' element={<Bio/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
