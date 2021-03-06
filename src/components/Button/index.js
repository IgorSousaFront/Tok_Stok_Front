import React from 'react'
import { Element } from './style'

const Button = ({children, ...props}) => {
  return(
    <Element {...props}>
      {children}
    </Element>
  )
}

export default Button