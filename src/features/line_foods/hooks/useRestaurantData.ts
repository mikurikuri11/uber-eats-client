import { fetchLineFoods } from '@/features/line_foods/api/lineFoodAPI';
import { LineFood } from '@/features/line_foods/types';
import { RestaurantData } from '@/features/line_foods/types';

export const useRestaurantData = async (): Promise<RestaurantData> => {
  try {
    const lineFood: LineFood = await fetchLineFoods();
    // console.log("lineFood: ", lineFood);

    const { count, amount } = lineFood;
    const { name, time_required, fee } = lineFood.restaurant;

    const restaurantName: string = name;
    const deliveryTime: number = time_required;
    const itemCount: number = count;
    const totalAmount: number = amount;
    const deliveryFee: number = fee;
    const foodIds = lineFood.food_ids;
    const lineFoodIds = lineFood.line_food_ids;
    const restaurantId = lineFood.restaurant.id;

    return {
      restaurantName,
      deliveryTime,
      itemCount,
      totalAmount,
      deliveryFee,
      lineFoodIds,
      restaurantId,
      foodIds,
    };
  } catch (error) {
    console.error('エラーが発生しました:', error);

    return {
      restaurantName: '',
      deliveryTime: 0,
      itemCount: 0,
      totalAmount: 0,
      deliveryFee: 0,
      lineFoodIds: [],
      restaurantId: "0",
      foodIds: [],
    };
  }
};
