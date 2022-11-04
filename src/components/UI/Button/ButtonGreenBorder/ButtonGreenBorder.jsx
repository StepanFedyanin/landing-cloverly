import React, { children } from 'react'
import './ButtonGreenBorder.scss'

function ButtonGreenBorder({ children }) {
    return (
        <button className='ButtonGreenBorder'>{children}</button>
    )
}

export default ButtonGreenBorder