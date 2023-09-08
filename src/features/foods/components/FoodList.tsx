"use client";

import React from 'react'
import { useRecoilState } from 'recoil';

import FoodCard from './FoodCard';
import FoodModal from './FoodModal';
import NewOrderConfirmModal from '@/features/foods/components/ConfirmFoodModal';

import { useOpenModal } from '../fooks/useOpenModal';
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

  const handleConfirmReplace = () => {
    // 確認モーダルの「確認」ボタンがクリックされたときの処理
    // ここでAPIリクエストを行い、成功した場合に置き換えを実行する
    // APIリクエストの成功時には setShowConfirmModal(false); を呼び出してモーダルを閉じる
  };

  console.log(showConfirmModal);

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
      />
    </>
  )
}

export default FoodList
