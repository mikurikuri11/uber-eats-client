import NotFound from "@/app/not-found";
import { Restaurant } from "../types";
import { restaurantsIndex } from "@/url";

export const getAllRestaurants = async (): Promise<Restaurant[]> => {
  const response = await fetch(restaurantsIndex, {
    cache: "no-store"
  });

  if(response.status === 404) NotFound();

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  return data;
};
