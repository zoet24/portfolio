import React from 'react'
import { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import AppContext from '../../context/AppContext';
import PortfolioCard from './portfolio-cards/PortfolioCard'

const Portfolio = () => {
    // Observe if section is > 50% in viewport
    const { setActiveNav } = useContext(AppContext)

    const { ref, inView } = useInView({
      threshold: 0.51
    });

    useEffect(() => {
      const timer = setTimeout(() => {
        if (inView) {
          setActiveNav('#portfolio');
        }
      }, 500);
      return () => clearTimeout(timer);
    }, [inView, setActiveNav]);

    return (
      <section ref={ref} className='portfolio' id="portfolio">
        <div className='portfolio__container container'>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3'>
            <PortfolioCard />
          </div>
        </div>
      </section>
    )
}

export default Portfolio