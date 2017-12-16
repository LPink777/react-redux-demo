import * as Types from "../action-types/collection";

export function collection(state = [], action) {
    switch (action.type) {
        case Types.ADD_COLLECTION:
            return [...state,action.data]
        case Types.REMOVE_COLLECTION:
            return state.filter(item=>action.data!==item)
        default:
            return state;
    }
}