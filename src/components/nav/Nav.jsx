import React from 'react'
import {useContext} from 'react'
import AppContext from '../../context/AppContext';

import Icon from '../../components/icons/Icon'
// import headshot from '../../assets/images/zoe-headshot-2.jpg'
import {FaHome} from 'react-icons/fa';
import {FaClipboardList} from 'react-icons/fa';
import {AiFillMessage} from 'react-icons/ai';


const Nav = () => {
    const { activeNav, setActiveNav } = useContext(AppContext)

    return (
      <nav className='nav fixed bottom-0 left-0 right-0 z-30'>
        <div className='nav__container flex justify-center gap-3 border-2 border-black bg-white w-fit p-2 my-2 mx-auto rounded-full'>
          <a href="#home"
             onClick={() => setActiveNav('#home')}>
            <Icon size={"large"} colour={""} state={activeNav === '#home' ? 'active' : ''}>
              <FaHome />
            </Icon>
          </a>
          <a href="#portfolio"
             onClick={() => setActiveNav('#portfolio')}>
            <Icon size={"large"} colour={""} state={activeNav === '#portfolio' ? 'active' : ''}>
              <FaClipboardList />
            </Icon>
          </a>
          <a href="#contact"
             onClick={() => setActiveNav('#contact')}>
            <Icon size={"large"} colour={""} state={activeNav === '#contact' ? 'active' : ''}>
              <AiFillMessage />
            </Icon>
          </a>
        </div>
      </nav>

      // <nav className='nav'>
      //   <div className='nav__container flex items-center justify-between bg-white'>
      //     <div className='flex items-center'>
      //       {/* Photo */}
      //       <div className="nav__image-wrapper mr-4">
      //         <img src={headshot} alt="Zoe Thexton" />
      //       </div>
      //       {/* Zoe Thexton */}
      //       <h2 className='font-body'>Zoe Thexton</h2>
      //     </div>
      //     <div>
      //       <ul className='flex space-x-6'>
      //         <li><a href="#">Projects</a></li>
      //         <li><a href="#">Contact Me</a></li>
      //       </ul>
      //     </div>
      //   </div>
      //     {/* Projects */}
      //     {/* Contact me */}
      // </nav>
    )
}

export default Nav