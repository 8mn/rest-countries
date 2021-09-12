import React from 'react'
import classes from './Header.module.css'



function Header() {

    return (
        <header className={classes.Header}>
        <div className={classes.headerContent}>
        <span className={classes.Heading}> Where in the world? </span>
        </div>
      </header>
    )
}

export default Header
