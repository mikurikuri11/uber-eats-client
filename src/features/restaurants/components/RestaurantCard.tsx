import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { RestaurantCardProps } from '@/features/restaurants/types'

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <div key={restaurant.id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${restaurant.id}`}
          alt={restaurant.name}
          width={1000}
          height={500}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`restaurants/${restaurant.id}/foods`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {restaurant.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{`配送料： ${restaurant.fee} 円 ${restaurant.time_required} 分`}</p>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard
