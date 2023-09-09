import { LineFood } from "../types";
import { lineFoods, lineFoodsReplace } from "@/url";

export const createLineFood = async (id: string , count: number): Promise<LineFood[]> => {

  const currentDateTime = new Date().toISOString();

  const response = await fetch(lineFoods, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      food_id: id,
      count,
      created_at: currentDateTime,
    }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    return Promise.reject(new Error(errorMessage));
  }

  const data = await response.json();
  return data.foods;
};

export const replaceLineFood = async (id: string, count: number): Promise<LineFood[]> => {

  const currentDateTime = new Date().toISOString();

  const response = await fetch(lineFoodsReplace, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      food_id: id,
      count,
      created_at: currentDateTime,
    }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    return Promise.reject(new Error(errorMessage));
  }

  const data = await response.json();
  return data.foods;
}