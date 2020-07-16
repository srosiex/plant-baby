import {
    LOGGED_OUT,
    LOGGED_IN,
    SIGNUP,
    LOGIN,
    LOGOUT
} from "../actions/types"

export function usersReducer(state = {
    isLoggedIn: false,
    user: {}
}, action) {
    const { payload, type } = action
    switch (type) {
        case SIGNUP:
            return {
                ...state,
                isLoggedIn: true,
                user: payload
            }
            case LOGIN:
            return {
                isLoggedIn: true,
                user: payload
            }
            case LOGGED_IN:
                return {
                    isLoggedIn: true,
                    user: payload.user
                }
        default: 
            return state
    }
}

