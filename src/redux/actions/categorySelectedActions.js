import { CATEGORY_IS_SELECTED } from "./actionsTypes";



export function categoryIsSelected(category) {
    return { type: CATEGORY_IS_SELECTED, category };
}
