import React , {useEffect} from 'react'
import SwitcherButton from '../components/SwitcherButton'
import { MainContext, useContext } from '../context' 

const Footer = () => {  
  const {theme, setTheme, appendMethods} = useContext(MainContext);
  const themeChange = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  useEffect(() => {
    appendMethods({themeChange}) 
  }, []);

  return (
    <>
     <span>Footer</span> 
     <SwitcherButton theme={theme} themeChange={themeChange}/>
    </>
  )
}

export default Footer
