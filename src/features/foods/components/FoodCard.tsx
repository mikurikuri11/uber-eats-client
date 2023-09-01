import React from 'react'
import Image from 'next/image'

import { Food } from '@/features/foods/types'

interface FoodCardProps {
  food: Food;
}

const FoodCard = ({ food }: FoodCardProps) => {
  return (
    <div>
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
    </div>
  )
}

export default FoodCard
