import React from 'react'

const SwitcherTitle = ({titleNameChange}) => {
  return (
    <button className='switcherBtn' onClick={titleNameChange}>Set Title</button>
  )
}

export default SwitcherTitle
