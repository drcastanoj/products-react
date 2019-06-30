import { initialState } from "./initialState";
import { LOAD_PRODUCTS_SUCCESS } from "../actions/actionsTypes";

export function productsReducer(state = initialState.products, action) {
  switch (action.type) {
    case LOAD_PRODUCTS_SUCCESS:
      return [...action.products]
    default:
      return state;

  }
}
