import { useRecoilState } from 'recoil';
import { eachFoodCountAtom } from '@/recoil/atoms/eachFoodCountAtom';

export function useEachFoodCount(foodId: string) {
  const [eachFoodCount, setEachFoodCount] = useRecoilState(eachFoodCountAtom(foodId));

  const increment = () => {
    setEachFoodCount(eachFoodCount + 1);
  };

  const decrement = () => {
    if (eachFoodCount > 0) {
      setEachFoodCount(eachFoodCount - 1);
    }
  };

  const reset = () => {
    setEachFoodCount(0);
  }

  return {
    eachFoodCount,
    increment,
    decrement,
    reset,
  };
}
