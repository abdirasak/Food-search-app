import { createContext, useState, useCallback } from "react";
import axios from 'axios';

const RestaurantsContext = createContext()


function Provider({ children }) {
  const [restaurants, setRestaurants] = useState([])

  const fetchRestaurants = useCallback(async (searchTerm, place) => {
    const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": process.env.REACT_APP_TOKEN
      },
      params: {
        term: searchTerm,
        location: place,
        limit: 21
      }
    })
    setRestaurants(response.data.businesses)
  }, [])

  const valueToShare = {
    restaurants,
    fetchRestaurants
  }

  return <RestaurantsContext.Provider value={valueToShare}>
    {children}
  </RestaurantsContext.Provider>

}

export { Provider }
export default RestaurantsContext