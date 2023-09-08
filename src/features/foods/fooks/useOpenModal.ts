import { useState } from "react"

import { Food } from "../types";

interface openFoodModalProps {
  id: string;
  foods: Food[];
  setShowFoodModal: (showFoodModal: boolean) => void;
}

// 選択したフードの情報を特定し、モーダルを表示するフック
export const useOpenModal = () => {
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);

  const openFoodModal = ({ id, foods, setShowFoodModal }: openFoodModalProps) => {
    const foundFood = foods.find((food) => food.id === id);
    setSelectedFood(foundFood || null);
    setShowFoodModal(true);
  };

  return { selectedFood, openFoodModal };
}