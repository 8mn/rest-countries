import React,{useState} from 'react'
import classes from './Header.module.css'



function Header() {

    const[mode,setmode] = useState('Dark Mode')

    const toggleMode = () => {
        if (mode === 'Light Mode'){
          setmode('Dark Mode')
          seticon('Light')
        }else{
          setmode('Light Mode')
          seticon('Dark')
        }
      }
      


    return (
        <header className={classes.Header}>
        <div className={classes.headerContent}>
        <span className={classes.Heading}> Where in the world? </span>
        {/* <div className={classes.toggleDark} onClick={toggleMode}>
          {icon === "Dark"? <BiSun />: <BiMoon />}
          {mode}
        </div> */}
        </div>
      </header>
    )
}

export default Header
