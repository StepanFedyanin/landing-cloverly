import React, { children } from 'react'
import './ButtonWhite.scss'

function ButtonWhite({children}) {
  return (
    <button className='ButtonWhite'>{children}</button>
  )
}

export default ButtonWhite