import NotFound from "@/app/not-found";
import { Food } from "../types";
import { foodsIndex, food } from "@/url";

export const getRestaurantFoods = async (id: string): Promise<Food[]> => {

  const response = await fetch(foodsIndex(id), {
    cache: "no-store"
  });

  if (response.status === 404) NotFound();

  if (!response.ok) {
    const errorMessage = await response.text();
    console.error(`Error: ${errorMessage}`);
    throw new Error(errorMessage);
  }

  const data = await response.json();
  return data.foods;
};

export const getFood = async (restaurantId: string, foodId: string): Promise<Food> => {
  const response = await fetch(food(restaurantId, foodId), {
    cache: "no-store"
  });

  if (response.status === 404) NotFound();

  if (!response.ok) {
    const errorMessage = await response.text();
    console.error(`Error: ${errorMessage}`);
    throw new Error(errorMessage);
  }

  const data = await response.json();
  return data.food;
}
