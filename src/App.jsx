
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Portfolio from './Pages/Portfolio'
import Services from './Pages/Services'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { theme } from './theme/theme'


function App() {


  return (
    <>
    <ThemeProvider theme={theme}>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
     

    </>
  )
}

export default App
