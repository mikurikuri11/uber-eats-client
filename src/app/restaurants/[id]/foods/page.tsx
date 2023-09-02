import React from 'react';

import { getRestaurantFoods } from '@/features/foods/api/foodAPI';
import { getAllRestaurants } from '@/features/restaurants/api/restaurantAPI';
import FoodList from '@/features/foods/components/FoodList';

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
          {/* {foods.map((food) => (
            <div key={food.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <Image
                  src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${food.id}0`}
                  alt={food.name}
                  width={1000}
                  height={500}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {food.name}
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{food.price}</p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Food;
