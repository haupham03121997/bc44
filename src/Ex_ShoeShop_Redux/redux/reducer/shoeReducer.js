import { shoeArr } from "../../data";
import { BUY_SHOE, DELETE_SHOE, VIEW_DETAIL } from "../constant/shoeConstant";

let inititalState = {
  shoeArr: shoeArr,
  detailShoe: shoeArr[0],
  cart: [],
};

export const shoeReducer = (state = inititalState, { type, payload }) => {
  switch (type) {
    case VIEW_DETAIL: {
      // payload : chứa object shoe
      state.detailShoe = payload;
      return { ...state };
    }

    case DELETE_SHOE: {
      // payload : chứa id shoe
      let cloneCart = state.cart.filter((item) => {
        return item.id !== payload;
      });
      // state.cart=cloneCart
      return { ...state, cart: cloneCart };
    }
    case BUY_SHOE: {
      // payload : chứ object shoe
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => item.id == payload.id);
      if (index == -1) {
        let newShoe = { ...payload, soLuong: 1 };
        cloneCart.push(newShoe);
      } else {
        cloneCart[index].soLuong = cloneCart[index].soLuong + 1;
      }
      return { ...state, cart: cloneCart };
    }
    default:
      return state;
  }
};
