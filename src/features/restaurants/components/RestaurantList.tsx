import React from 'react';

import { Restaurant } from '@/features/restaurants/types';
import RestaurantCard from './RestaurantCard';

interface RestaurantListProps {
  restaurants: Restaurant[];
}

const RestaurantList = ({ restaurants }: RestaurantListProps) => {
  return (
    <>
      {restaurants.map((restaurant) => (
        <RestaurantCard restaurant={restaurant} key={restaurant.id} />
      ))}
    </>
  )
}

export default RestaurantList
