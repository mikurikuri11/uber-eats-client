import { useState, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import { replaceLineFood } from '@/features/line_foods/api/lineFoodAPI';
import { ClickReplaceOrderResultProps } from '@/features/foods/types';
import { showConfirmModalAtom } from '@/recoil/atoms/showConfirmModalAtom';
import { useEachFoodCount } from './useEachFoodCount';

export function useClickReplaceOrder(
  foodId: string,
  eachFoodCount: number,
  setOpen: Dispatch<SetStateAction<boolean>>
): ClickReplaceOrderResultProps {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const router = useRouter();
  const setShowConfirmModal = useSetRecoilState(showConfirmModalAtom);
  const { reset } = useEachFoodCount(foodId);

  const onClickReplaceOrder = async (): Promise<void> => {

    setIsLoading(true);

    try {
      await replaceLineFood(foodId, eachFoodCount);
      setSuccess(true);
      setOpen(false);
      reset();
      router.push('/orders');
      router.refresh();
      console.log('Success: create line food');
    } catch (error: any) {
      setError(error);
      setShowConfirmModal(false);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    success,
    error,
    onClickReplaceOrder,
  };
}