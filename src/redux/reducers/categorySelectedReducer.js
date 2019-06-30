import { CATEGORY_IS_SELECTED } from "../actions/actionsTypes";

export function categorySelectedReducer(state = null, action) {
    switch (action.type) {
        case CATEGORY_IS_SELECTED:
            if (!action.category) {
                return null;
            }
            return action.category;
        default:
            return state;

    }
}
