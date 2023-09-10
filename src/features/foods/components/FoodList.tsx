"use client";

import React from 'react'
import { useRecoilState } from 'recoil';

import FoodCard from './FoodCard';
import FoodModal from './FoodModal';
import NewOrderConfirmModal from '@/features/foods/components/ConfirmFoodModal';

import { useOpenModal } from '../hooks/useOpenModal';
import { FoodListProps } from '@/features/foods/types';
import { showConfirmModalAtom } from '@/recoil/atoms/showConfirmModalAtom';
import { showFoodModalAtom } from '@/recoil/atoms/showFoodModalAtom';

const FoodList = ({ foods }: FoodListProps) => {
  const [showFoodModal, setShowFoodModal] = useRecoilState(showFoodModalAtom);
  const [showConfirmModal, setShowConfirmModal] = useRecoilState(showConfirmModalAtom);
  const { selectedFood, openFoodModal } = useOpenModal();

  const onClickFoods = (id: string) => {
    openFoodModal({ id, foods, setShowFoodModal });
  }

  return (
    <>
      {foods.map((food) => (
        <FoodCard food={food} key={food.id} onClickFoods={onClickFoods} />
      ))}
      <FoodModal
        showFoodModal={showFoodModal}
        setShowFoodModal={setShowFoodModal}
        food={selectedFood}
      />
      <NewOrderConfirmModal
        showConfirmModal={showConfirmModal}
        setShowConfirmModal={() => setShowConfirmModal(false)}
        food={selectedFood}
      />
    </>
  )
}

export default FoodList
