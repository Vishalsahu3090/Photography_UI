import {ThemeProvider} from '@mui/material'
import {theme} from './theme/theme'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact'
import Portfolio from './Pages/Portfolio/Portfolio'
import Services from './Pages/Services'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Gallery from './Pages/Gallery'



function App() {


  return (
    <>
    <ThemeProvider theme={theme}>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
     

    </>
  )
}

export default App
