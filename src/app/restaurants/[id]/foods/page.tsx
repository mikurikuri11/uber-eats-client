import React from 'react';

import { getRestaurantFoods } from '@/features/foods/api/foodAPI';
import { getAllRestaurants } from '@/features/restaurants/api/restaurantAPI';
import FoodList from '@/features/foods/components/FoodList';
// import Example from './Example';

interface FoodProps {
  params: {
    id: string;
  };
}

const Food = async ({ params }: FoodProps) => {
  const foods = await getRestaurantFoods(params.id);

  const restaurants = await getAllRestaurants();
  const restaurant = restaurants.find((restaurant) => restaurant.id == params.id);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{restaurant?.name}</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <FoodList foods={foods} />
          {/* <Example /> */}
        </div>
      </div>
    </div>
  );
};

export default Food;
