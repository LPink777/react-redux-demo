import * as Types from "../action-types/collection";

export function remove(id) {
    return {
        type:Types.REMOVE_COLLECTION,
        data:id
    }
}

export function add(id) {
    return {
        type:Types.ADD_COLLECTION,
        data:id
    }
}

