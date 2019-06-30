import { productsEpic } from './productsActions';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(
    productsEpic
);
