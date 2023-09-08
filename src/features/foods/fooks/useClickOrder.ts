import { useState, Dispatch, SetStateAction } from 'react';
import { createLineFood } from '@/features/line_foods/api/lineFoodAPI';
import { ClickOrderResultProps } from '@/features/foods/types';

export function useClickOrder(
  foodId: string,
  eachFoodCount: number,
  setOpen: Dispatch<SetStateAction<boolean>>
): ClickOrderResultProps {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const onClickOrder = async (): Promise<void> => {
    if (eachFoodCount === 0) {
      return;
    }

    setIsLoading(true);

    try {
      await createLineFood(foodId, eachFoodCount);
      setSuccess(true);
      setOpen(false);
    } catch (error: any) {
      setError(error);
      if (error.response && error.response.status === 406) {
        setOpen(false);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    success,
    error,
    onClickOrder,
  };
}