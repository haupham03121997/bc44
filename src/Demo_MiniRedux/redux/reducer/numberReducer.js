import { GIAM, TANG } from "../constant/numberConstant";

let initialState = {
  soLuong: 1000,
};

export const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case TANG: {
      state.soLuong++;
      return { ...state };
    }
    case GIAM: {
      state.soLuong = state.soLuong - action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
// giảm 5 => có tham so

// mapDispatchToProps

// ko có setState => làm sao để update layout?
