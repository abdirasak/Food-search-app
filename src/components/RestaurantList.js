import React from 'react'
import RestaurantShow from './RestaurantShow'
import useRestaurantsContext from '../hooks/use-restaurants-context'

function RestaurantList() {
  const { restaurants } = useRestaurantsContext()
  const results = restaurants.map(restaurant => <RestaurantShow key={restaurant.id} data={restaurant} />)
  return (
    <div className='card-container'>{results}</div>
  )
}

export default RestaurantList