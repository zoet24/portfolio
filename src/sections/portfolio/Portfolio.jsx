import React from 'react'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PortfolioCard from './portfolio-cards/PortfolioCard'

const Portfolio = () => {
    const { ref, inView } = useInView({
      threshold: 0.51
    });

    useEffect(() => {
      console.log(inView)
    },[inView])

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