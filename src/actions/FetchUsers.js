
 {/* Execute Action */}

import {fetchUsersPending, fetchUsersSuccess, fetchUsersError} from './UsersAction'


 {/* Fetch Data from Server */}

function fetchUsers() {
    return dispatch => {
        dispatch(fetchUsersPending());
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchUsersSuccess(res.users))
            return res.users;
        })
        .catch(error => {
            dispatch(fetchUsersError(error));
        })
    }
}

export default fetchUsers