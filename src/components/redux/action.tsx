import {ADD_TO_CART, REMOVE_FROM_CART} from '../../Data/Constant';
import {ProductsType} from '../../Data/ProductsData';

export function addToCart(item: ProductsType) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}

export function removeFromCart(item: ProductsType) {
  return {
    type: REMOVE_FROM_CART,
    data: item,
  };
}
