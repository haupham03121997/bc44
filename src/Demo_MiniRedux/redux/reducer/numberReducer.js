import { TANG } from "../constant/numberConstant";

let initialState = {
  soLuong: 1,
};

export const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case TANG: {
      console.log("yes");
      state.soLuong++;
      return { ...state };
    }
    default:
      return state;
  }
};

// mapDispatchToProps

// ko có setState => làm sao để update layout?
