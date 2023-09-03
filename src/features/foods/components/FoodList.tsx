"use client";

import React from 'react'
import { useState } from 'react'

import { Food } from '@/features/foods/types'
import FoodCard from './FoodCard';
import FoodModal from './FoodModal';
import { useSelectFood } from '../fooks/useSelectUser';

interface FoodListProps {
  foods: Food[];
}

const FoodList = ({ foods }: FoodListProps) => {
  const [open, setOpen] = useState(false);
  const { selectedFood, onSelectFood } = useSelectFood();

  const onClickFoods = (id: string) => {
    onSelectFood({ id, foods, setOpen });
  }

  return (
    <>
      {foods.map((food) => (
        <FoodCard food={food} key={food.id} onClickFoods={onClickFoods} />
      )) }
      <FoodModal
        open={open}
        setOpen={setOpen}
        food={selectedFood}
        />
    </>
  )
}

export default FoodList
