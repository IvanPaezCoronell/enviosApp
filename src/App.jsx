import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import Registro from './Components/Registro/Registro'
import Home from './Components/Home/Home'
import Navbar from './Layouts/Navbar/Navbar'
import Footer from './Layouts/Footer/Footer'
import Orden from './Components/Orden/Orden'

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}> 
          
            <Route index element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="Registro" element={<Registro />} />
            <Route path="Orden" element={<Orden />} />

          
            <Route path="*" element={<Navigate replace to="/" />}/> 

          </Route>

        </Routes>
      </BrowserRouter>
      
      <Footer />

    </div>
  )
}

export default App
