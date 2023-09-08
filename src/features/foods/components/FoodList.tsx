"use client";

import React from 'react'
import { useState } from 'react'

import FoodCard from './FoodCard';
import FoodModal from './FoodModal';
import NewOrderFoodModal from '@/features/line_foods/components/NewOrderFoodModal';

import { useOpenModal } from '../fooks/useOpenModal';
import { FoodListProps } from '@/features/foods/types';

const FoodList = ({ foods }: FoodListProps) => {
  const [open, setOpen] = useState(false);
  const { selectedFood, openFoodModal } = useOpenModal();

  const onClickFoods = (id: string) => {
    openFoodModal({ id, foods, setOpen });
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
      {/* <NewOrderFoodModal
        food={selectedFood}
        open={open}
        setOpen={setOpen}
        // foodCount={selectedFood?.count || 0}
        // existingRestaurantName={selectedFood?.restaurant_name || ''}
        // newRestaurantName={selectedFood?.restaurant_name || ''}
        // onClickSubmit={() => console.log('onClickSubmit')}
      /> */}
    </>
  )
}

export default FoodList
