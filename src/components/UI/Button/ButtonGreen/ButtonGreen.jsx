import React, { children } from 'react'
import './ButtonGreen.scss'

function ButtonGreen({ children }) {
    return (
        <button className='ButtonGreen'>{children}</button>
    )
}

export default ButtonGreen