import { useState, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import { createLineFood } from '@/features/line_foods/api/lineFoodAPI';
import { ClickOrderResultProps } from '@/features/foods/types';
import { showConfirmModalAtom } from '@/recoil/atoms/showConfirmModalAtom';
import { showFoodModalAtom } from '@/recoil/atoms/showFoodModalAtom';

export function useClickOrder(
  foodId: string,
  eachFoodCount: number,
  setOpen: Dispatch<SetStateAction<boolean>>
): ClickOrderResultProps {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const router = useRouter();
  const setShowConfirmModal = useSetRecoilState(showConfirmModalAtom);
  const setShowFoodModal = useSetRecoilState(showFoodModalAtom);


  const onClickOrder = async (): Promise<void> => {

    setIsLoading(true);

    try {
      await createLineFood(foodId, eachFoodCount);
      setSuccess(true);
      setOpen(false);
      router.push('/orders');
      router.refresh();
      console.log('Success: create line food');
    } catch (error: any) {
      setError(error);
      setShowFoodModal(false);
      setShowConfirmModal(true);
      // if (error.response && error.response.status === 406) {
      //   setOpen(false);
      //   console.error('Error: 406 Not Acceptable');
      // }
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