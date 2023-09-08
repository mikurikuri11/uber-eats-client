import { atom } from "recoil";
import { Count } from "../type";

export const lineFoodsAtom = atom<Array<Count>>({
  key: "lineFoods",
  default: [],
});