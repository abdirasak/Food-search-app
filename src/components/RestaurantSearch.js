import { useState } from 'react'
import useRestaurantsContext from '../hooks/use-restaurants-context'

function RestaurantSearch({ onSubmit }) {
  const [term, setTerm] = useState('')
  const [location, setLocation] = useState('')
  const { fetchRestaurants } = useRestaurantsContext()


  const handleSubmit = (e) => {
    e.preventDefault()
    fetchRestaurants(term, location)
    setTerm('')
    setLocation('')
  }

  return (
    <div className='search-container'>
      <h2>Search Restaurant</h2>
      <form className='form' onSubmit={handleSubmit}>
        <input type="text" className='form-group' name="term" placeholder='Search Term e.g Pizza' value={term} onChange={(e) => {
          setTerm(e.target.value)
        }} />
        <input type="text" className='form-group' name="location" placeholder='Location e.g London' value={location} onChange={(e) => {
          setLocation(e.target.value)
        }} />
        <button type='submit' className='btn'>search</button>
      </form>
    </div>
  )
}

export default RestaurantSearch