import React from 'react'
import {useGlobalContext} from "./Context.jsx";
import {FaSun,FaMoon} from "react-icons/fa";


const ThemeToggle = () => {

const {isDarkTheme,toggleDarkTheme} = useGlobalContext();



    return (
        <section className='toggle-container'>
            <button className='dark-toggle' onClick={toggleDarkTheme} type='button'>
                {isDarkTheme? <FaMoon className='toggle-icon'/> : <FaSun className='toggle-icon'/>}
            </button>
        </section>
    )
}
export default ThemeToggle
