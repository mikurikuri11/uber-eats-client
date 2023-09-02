import { useState } from "react"

import { Food } from "../types";

interface onSelectFoodProps {
  id: string;
  foods: Food[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// 選択したフードの情報を特定し、モーダルを表示するフック
export const useSelectFood = () => {
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);

  const onSelectFood = ({ id, foods, setOpen }: onSelectFoodProps) => {
    const foundFood = foods.find((food) => food.id === id);
    setSelectedFood(foundFood || null);
    setOpen(true);
  };

  return { selectedFood, onSelectFood };
}