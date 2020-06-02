 {/* 

    Prepare Actions / Fetch Status

*/}

export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'

function fetchUsersPending() {
    return {
        type: FETCH_PRODUCTS_PENDING
    }
}

function fetchUsersSuccess(users) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        products: products
    }
}

function fetchUsersError(error) {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error: error
    }
}
