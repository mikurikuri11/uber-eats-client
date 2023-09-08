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
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface ClickOrderResultProps {
  isLoading: boolean;
  success: boolean;
  error: Error | null;
  onClickOrder: () => Promise<void>;
}

export interface FoodListProps {
  foods: Food[];
}

export interface FoodCardProps {
  food: Food;
  onClickFoods: (id: string) => void;
}