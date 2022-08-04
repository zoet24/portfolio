import React from 'react'
import Icon from '../../../components/icons/Icon'
import {DiHtml5} from 'react-icons/di';

const PortfolioCard = () => {
    return (
      <article className='portfolio-card max-w-[400px] relative training-wheels p-3 mx-auto'>
        <div className='portfolio-card__overlay absolute top-0 bottom-0 left-0 right-0 z-10'>
            <div className='portfolio-card__overlay-content flex items-center justify-center space-x-3 w-full h-full'>
              <Icon>
                <DiHtml5 />
              </Icon>
              <Icon>
                <DiHtml5 />
              </Icon>
            </div>
        </div>
        <div className='w-full pb-[100%] relative overflow-hidden'>
          {/* Image */}
          <img className="absolute object-cover w-full h-full top-0 left-0 bottom-0 right-0" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
          {/* Category */}
          <div className='absolute bottom-0 left-0 right-0'>
            <div className='bg-white w-fit mx-auto'>
              <h4 className=''>Category</h4>
            </div>
          </div>
        </div>
        <div className='mt-2'>
          {/* Title */}
          <h3 className='text-center'>Title</h3>
          {/* Description */}
          <p>Description description description</p>
          {/* Languages */}
          <div className='flex justify-center space-x-1 mt-2'>
            <Icon>
              <DiHtml5 />
            </Icon>
            <Icon size="small">
              <DiHtml5 />
            </Icon>
            <Icon>
              <DiHtml5 />
            </Icon>
          </div>
        </div>
      </article>
    )
}

export default PortfolioCard