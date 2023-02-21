import { useContext } from "react";
import RestaurantsContext from '../context/Restaurants'

function useRestaurantsContext() {
  return useContext(RestaurantsContext)
}

export default useRestaurantsContext