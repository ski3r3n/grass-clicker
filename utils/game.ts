import { reset } from "./storage";

export const addGrassAndCheck = (
  addAmount: number,
  curAmount: number,
  setAmount: any,
  setItems: any
) => {
  setAmount((curAmount: number) => curAmount + addAmount);
  if (curAmount == Infinity) {
    alert("You have reached Infinity grass! You win!");
    reset(setItems);
  } else if (Number.isNaN(curAmount)) {
    reset(setItems);
  }
};
