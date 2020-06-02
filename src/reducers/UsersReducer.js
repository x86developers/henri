
 {/* Initialize Action */}

import { FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../actions/UsersAction'

{/* Set Default State */}

const initialState = {
    pending: false,
    products: [],
    error: null
}

{/* Set Actions State */}

export function UsersReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_USERS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.payload
            }
        case FETCH_USERS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

{/* Selector: Get Define Part of State */}

export const getUsers = state => state.products;
export const getUsersPending = state => state.pending;
export const getUsersError = state => state.error;