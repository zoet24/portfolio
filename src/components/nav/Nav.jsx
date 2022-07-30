import React from 'react'
import headshot from '../../assets/images/zoe-headshot.jpeg'

const Nav = () => {
    return (
      <nav className='nav'>
        <div className='nav__container flex items-center justify-between bg-white'>
          <div className='flex items-center'>
            {/* Photo */}
            <div className="nav__image-wrapper mr-4">
              <img src={headshot} alt="Zoe Thexton" />
            </div>
            {/* Zoe Thexton */}
            <h2 className='font-body'>Zoe Thexton</h2>
          </div>
          <div>
            <ul className='flex space-x-6'>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact Me</a></li>
            </ul>
          </div>
        </div>
          {/* Projects */}
          {/* Contact me */}
      </nav>
    )
}

export default Nav