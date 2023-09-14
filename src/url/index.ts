const DEFAULT_API_LOCALHOST = 'http://localhost:3001/api/v1';

export const restaurantsIndex = `${DEFAULT_API_LOCALHOST}/restaurants`
export const foodsIndex = (restaurantId: string) =>
  `${DEFAULT_API_LOCALHOST}/restaurants/${restaurantId}/foods`
export const food = (restaurantId: string, foodId: string) =>
  `${DEFAULT_API_LOCALHOST}/restaurants/${restaurantId}/foods/${foodId}`
export const lineFoods = `${DEFAULT_API_LOCALHOST}/line_foods`;
export const lineAllFoods = `${DEFAULT_API_LOCALHOST}/line_foods/list`;
export const lineFoodsReplace = `${DEFAULT_API_LOCALHOST}/line_foods/replace`;
export const orders = `${DEFAULT_API_LOCALHOST}/orders`;
