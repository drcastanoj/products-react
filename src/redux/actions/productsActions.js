import { LOAD_PROUDCTS, LOAD_PRODUCTS_SUCCESS } from "./actionsTypes";
import { filter, mergeMap } from 'rxjs/operators';
import { getProducts } from "../../api/productsApi";

export const productsEpic = action$ => action$.pipe(
    filter(action => action.type === LOAD_PROUDCTS),
    // `mergeMap()` supports functions that return promises, as well as observables
    mergeMap(async () => {
        const products = await getProducts();
        return loadProductsSuccess(products);
    })
);

export function loadProductsSuccess(products) {
    return { type: LOAD_PRODUCTS_SUCCESS, products };
}


