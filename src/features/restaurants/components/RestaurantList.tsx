import React from 'react';

import RestaurantCard from './RestaurantCard';
import { RestaurantListProps } from '@/features/restaurants/types';



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
