import { useEffect } from 'react';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import useRestaurantsContext from './hooks/use-restaurants-context'

function App() {
  const { fetchRestaurants } = useRestaurantsContext()

  useEffect(() => {
    fetchRestaurants('food', 'london')
  }, [fetchRestaurants])
  return (
    <div className="container">
      <RestaurantSearch />
      <RestaurantList />
    </div>
  );
}

export default App;
