import React from 'react'

const Icon = ({size, colour, children}) => {
  const iconSize = size ? ` icon--${size}` : '';
  const iconColour = colour ? ` icon--${colour}` : '';

  return (
      <div className={`icon${iconSize}${iconColour}`}>
        {children}
      </div>
    )
}

export default Icon