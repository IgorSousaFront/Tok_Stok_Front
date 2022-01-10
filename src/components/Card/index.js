import React from 'react'
import { CardWrapper, Title } from './style'

const Card = ({
  name,
  corporateName,
}) => {


  return(
    <CardWrapper>
      <Title>{name}</Title>
      <span>{corporateName}</span>
    </CardWrapper>
  )
}

export default Card