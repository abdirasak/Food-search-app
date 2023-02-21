import React from 'react'
import RestaurantShow from './RestaurantShow'
import useRestaurantsContext from '../hooks/use-restaurants-context'

function RestaurantList() {
  const { restaurants } = useRestaurantsContext()
  return (
    <div className='card-container'>{restaurants.length}</div>
  )
}

export default RestaurantList