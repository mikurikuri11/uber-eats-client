import { Dispatch, SetStateAction } from 'react';

export type Food = {
  id: string;
  restaurant_id: string;
  name: string;
  price: number;
  description: string;
  created_at: string;
  updated_at: string;
};

export interface FoodModalProps {
  food: Food | null;
  showFoodModal: boolean;
  setShowFoodModal: Dispatch<SetStateAction<boolean>>;
}

export interface ConfirmFoodModalProps {
  food: Food | null;
  showConfirmModal: boolean;
  setShowConfirmModal: Dispatch<SetStateAction<boolean>>;
}

export interface ClickOrderResultProps {
  isLoading: boolean;
  success: boolean;
  error: Error | null;
  onClickOrder: () => Promise<void>;
}

export interface ClickReplaceOrderResultProps {
  isLoading: boolean;
  success: boolean;
  error: Error | null;
  onClickReplaceOrder: () => Promise<void>;
}

export interface FoodListProps {
  foods: Food[];
}

export interface FoodCardProps {
  food: Food;
  onClickFoods: (id: string) => void;
}