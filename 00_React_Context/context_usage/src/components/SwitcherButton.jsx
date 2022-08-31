import React from 'react'

const SwitcherButton = ({themeChange}) => { 
  return (
    <button className='switcherBtn' onClick={themeChange}>Switch Theme</button>
  )
}

export default SwitcherButton
