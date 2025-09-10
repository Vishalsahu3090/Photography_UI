import {ThemeProvider} from '@mui/material'
import {theme} from './theme/theme'
import Home from './Pages/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



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
         
          
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
     

    </>
  )
}

export default App
