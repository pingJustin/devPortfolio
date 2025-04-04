import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import React, { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
        <BrowserRouter>
            <div id='top' className={`${themeName} app`}>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<About />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/resume" element={<Resume />}/>
              </Routes>
              </main>
            <ScrollToTop />
            <Footer />
          </div>
        </BrowserRouter>
  )
}

export default App
