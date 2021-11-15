import { CREATE_USER_FAILURE, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USER_SUCCESS } from "../actionTypes";

const initialState = {
    registerError: null,
    loginError: null,
    fetchUsersErr: null,
    searchedUser: null,
    users: [],
    user: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {...state, searchedUser: action.searchedUser}
        case FETCH_USERS_SUCCESS: 
            return {...state, users: action.users}
        case FETCH_USERS_FAILURE:
            return {...state, fetchUsersErr: action.error}  
        case CREATE_USER_FAILURE:
            return {...state, registerError: action.error};
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.user, loginError: null};
        case LOGIN_USER_FAILURE:
            return {...state, loginError: action.error};
        case LOGOUT_USER: 
            return {...state, user: null}
        default:
            return state;
    }
};

export default reducer;