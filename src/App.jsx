import React from 'react'
import { AppProvider } from './context/AppContext';
import Nav from './components/nav/Nav'
import Home from './sections/home/Home'
import Portfolio from './sections/portfolio/Portfolio'
import Contact from './sections/contact/Contact'

const App = () => {

  return (
    <AppProvider>
      <Nav />
      <main>
        <Home />
        <Portfolio />
        <Contact />
      </main>
    </AppProvider>
  )
}

export default App