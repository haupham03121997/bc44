import { shoeArr } from "../../data";

let inititalState = {
  shoeArr: shoeArr,
  detailShoe: shoeArr[0],
  cart: [],
};

export const shoeReducer = (state = inititalState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
