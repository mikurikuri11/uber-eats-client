import React from 'react'
import Image from 'next/image'

import { Food } from '@/features/foods/types'
import FoodCard from './FoodCard';

interface FoodListProps {
  foods: Food[];
}

const FoodList = ({ foods }: FoodListProps) => {
  return (
    <>
      {foods.map((food) => (
        <FoodCard food={food} key={food.id} />
      )) }
    </>
  )
}

export default FoodList
