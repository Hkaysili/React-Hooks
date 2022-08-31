import React, { useState, useEffect} from 'react';
import Header from './components/Header'
import Footer from './components/Footer' 
import { MainContext } from './context';


const App = () => {
  const [theme, setTheme] = useState('light');
  const [methods, setMethods] = useState({})

  const appendMethods = newMethods => {
    setMethods({
      ...methods,
      ...newMethods
    })
  }
  useEffect(() => {
    document.body.className = theme
  }, [theme]);

  const data = {
    theme,
    setTheme,
    appendMethods,
    ...methods
  }

  return (
    <MainContext.Provider value={data} >
      <div className="container">
        <Header/>
        <Footer/>
      </div>
    </MainContext.Provider>
  )
}

export default App
