import React, { children } from 'react'
import './ButtonDark.scss'

function ButtonDark({children}) {
  return (
    <button className='ButtonDark'>{children}</button>
  )
}

export default ButtonDark