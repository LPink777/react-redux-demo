import * as Types from "../action-types/userInfo";

// actionCreater

export function update(data) {
    return {
        type:Types.UPDATE_CITY,
        data
    }
}
