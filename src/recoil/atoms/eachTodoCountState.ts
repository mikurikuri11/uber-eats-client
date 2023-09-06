import { atomFamily } from "recoil";

type Count = number;
type TodoId = string | undefined;

export const eachTodoCountState = atomFamily<Count, TodoId>({
  key: "eachTodoCountState",
  default: 1,
});