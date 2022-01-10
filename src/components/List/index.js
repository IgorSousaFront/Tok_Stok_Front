import React, { useState, useEffect } from 'react'
// Services
import api from '../../services/api'
// Components
import Card from '../Card'
// Styles
import { ListWrapper } from './style'

const List = () => {
  const [providerList, setProviderList] = useState(null)

  useEffect(() => {
    api.get('provider').then(({data}) => {
      setProviderList(data)
    })
  }, [])

  return (
    <ListWrapper>
      {providerList?.map(item => (
        <Card
          key={item._id}
          name={item.name}
          corporateName={item.corporateName}
        />
      ))}
    </ListWrapper>
  )
}

export default List