import { useState } from "react"

import { Food } from "../types";

interface openFoodModalProps {
  id: string;
  foods: Food[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// 選択したフードの情報を特定し、モーダルを表示するフック
export const useOpenModal = () => {
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);

  const openFoodModal = ({ id, foods, setOpen }: openFoodModalProps) => {
    const foundFood = foods.find((food) => food.id === id);
    setSelectedFood(foundFood || null);
    setOpen(true);
  };

  return { selectedFood, openFoodModal };
}