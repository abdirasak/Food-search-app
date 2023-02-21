import { createContext, useState } from "react";
import axios from 'axios';

const RestaurantsContext = createContext()

function Provider({ children }) {
  const [restaurants, setRestaurants] = useState([])

  const fetchRestaurants = async (searchTerm, place) => {
    const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
      headers: {
        'Content-Type': "application/json",
        Authorization: 'Bearer yJchemi3DpbnEsbthVZqrYa6fD1QimnbK7ueikXoGXZtJY5VBv7DVqzlmzxVFbgw6YB9O2fEF8ejWr2jGC1goNlRsEDmLUwZqZeXbkQcofkrtX_ivOQ5B55h8hT0Y3Yx'
      },
      params: {
        term: searchTerm,
        location: place,
        limit: 50
      }
    })
    setRestaurants(response.data)
  }

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