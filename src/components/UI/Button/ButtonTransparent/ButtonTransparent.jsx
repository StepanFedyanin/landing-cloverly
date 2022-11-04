import React, { children } from 'react'
import './ButtonTransparent.scss'

function ButtonTransparent({children}) {
  return (
    <button className='ButtonTransparent'>{children}</button>
  )
}

export default ButtonTransparent