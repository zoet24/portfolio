import React from 'react'
import PortfolioCard from './portfolio-cards/PortfolioCard'

const Portfolio = () => {
    return (
      <section className='portfolio'>
        <div className='portfolio__container container'>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3'>
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
          </div>
        </div>
      </section>
    )
}

export default Portfolio