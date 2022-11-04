import React, { children } from 'react'
import './ButtonFirstContent.scss'

function ButtonFirstContent({children}) {
  return (
    <button className='ButtonFirstContent'><p className='ButtonFirstContentText'>{children}</p></button>
  )
}

export default ButtonFirstContent