import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { initialState } from './initialState';
import { categorySelectedReducer } from './categorySelectedReducer';


export const rootReducer = combineReducers({
  products: productsReducer,
  categories: () => initialState.categories,
  categorySelected: categorySelectedReducer,
});
