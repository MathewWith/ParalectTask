import { UserAction, UserActionTypes } from "src/types/UserTypes"

const initialState = {
    user: {}
}



export const user = (state = initialState, action: UserAction) => {
    switch(action.type){
        case UserActionTypes.GET_USER:
            return {
                user: action.payload
            }
        default:
            return state
    }
}