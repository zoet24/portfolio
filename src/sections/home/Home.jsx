import React from 'react'

const Home = () => {
  const headings = React.createRef();

  const headerScrollDown = () => {
    console.log("Hello!")
    console.log(headings.current)
  }
  const headerScrollUp = () => {
    console.log("Fare the well!")
  }

    return (
      <header className='home' id='home'>
        <div className='container flex flex-col items-center justify-center'>
          <h1 className='training-wheels'>Hi, I'm Zoe!</h1>
          <div className='grid grid-cols-2 gap-x-2 training-wheels'>
              <div ref={headings}
                   className='text-right h-[54px] overflow-y-scroll no-scrollbar'
                   onMouseEnter={headerScrollDown}
                   onMouseLeave={headerScrollUp}>
                  <h2>Fullstack</h2>
                  <h2>Wordpress</h2>
                  <h2>PHP</h2>
                  <h2>React</h2>
                  <h2>Sexy</h2>
                  <h2>STRONG</h2>
                  <h2>FEMALE</h2>
                  <h2>EMPOWERED</h2>
                  <h2>Fullstack</h2>
              </div>
              <div>
                  <h2>Developer</h2>
              </div>
          </div>
        </div>
      </header>
    )
}

export default Home