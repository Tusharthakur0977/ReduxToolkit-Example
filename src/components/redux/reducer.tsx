/* eslint-disable @typescript-eslint/no-unused-vars */
import {ADD_TO_CART, REMOVE_FROM_CART} from '../../Data/Constant';
import {ProductsType} from '../../Data/ProductsData';

const initialState: any = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];
    case REMOVE_FROM_CART:
      4;
      let result = state.filter((item: ProductsType) => {
        return item.name !== action.data;
      });
      return [...result];
    default:
      return state;
  }
};
