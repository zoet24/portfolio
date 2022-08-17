import React from 'react'
import { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import AppContext from '../../context/AppContext';

const Contact = () => {
    // Observe if section is > 50% in viewport
    const { setActiveNav } = useContext(AppContext)

    const { ref, inView } = useInView({
      threshold: 0.51
    });

    useEffect(() => {
      const timer = setTimeout(() => {
        if (inView) {
          setActiveNav('#contact');
        }
      }, 500);
      return () => clearTimeout(timer);
    }, [inView, setActiveNav]);

    return (
      <section ref={ref} className='contact' id='contact'>
        <div className='contact__container container'>
          Hello!
        </div>
      </section>
    )
}

export default Contact