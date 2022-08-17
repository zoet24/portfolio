import React from 'react'

const Icon = ({size, colour, state, children}) => {
  const iconSize = size ? ` icon--${size}` : '';
  // Default, large
  const iconColour = colour ? ` icon--${colour}` : '';
  // Default, white
  const iconState = state ? ` icon--${state}` : '';
  // Default, active

  return (
      <div className={`icon${iconSize}${iconColour}${iconState}`}>
        {children}
      </div>
    )
}

export default Icon