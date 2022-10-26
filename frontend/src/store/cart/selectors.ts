
import { CartState } from "../../types";

export const getCartItems = (state: CartState) => state.cart.items
export const getCountItems = (state: CartState) => state.cart.totalQuantity
export const getTotalAmount = (state: CartState) => state.cart.totalAmount