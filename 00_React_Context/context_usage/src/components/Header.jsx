import React, { useEffect, useState } from 'react'
import { MainContext, useContext } from '../context'; 
import SwitcherTitle from './SwitcherTitle';

const Header = () => {
  const {theme, appendMethods} = useContext(MainContext)
  const [name, setName] = useState("");
  const titleNameChange = () => {
    setName(`React Context`)
  }
  useEffect(() => {
    setName("Harun Veli KAYSILI")
    appendMethods({titleNameChange}) 
  }, []);

  return (
    <>  
        <span>{name}</span>
        <SwitcherTitle titleNameChange={titleNameChange}/>
        <br />
        <p>Selected Theme : <span style={{fontWeight:"bold"}}>{theme}</span></p>
    </>
  )
}

export default Header
