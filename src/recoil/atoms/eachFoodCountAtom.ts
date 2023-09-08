import { atomFamily } from "recoil";
import { Count, FoodId } from "../type";

export const eachFoodCountAtom = atomFamily<Count, FoodId>({
  key: "eachFoodCount",
  default: 1,
});