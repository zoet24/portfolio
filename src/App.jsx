import React from 'react'
import Nav from './components/nav/Nav'
import Home from './sections/home/Home'
import Portfolio from './sections/portfolio/Portfolio'
import Contact from './sections/contact/Contact'

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Home />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}

export default App