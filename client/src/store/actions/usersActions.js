import axios from "../../axiosApi"
import { CREATE_USER_FAILURE, CREATE_USER_SUCCESS, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "../actionTypes"
import { CREATE_USER, GET_USER, GET_USERS_QUERY, LOGIN_USER } from "../../constants"

const fetchUsersSuccess = users => {
    return {type: FETCH_USERS_SUCCESS, users};
}
const fetchUsersFailure = error => {
    return {type: FETCH_USERS_FAILURE, error};
}

export const fetchUsers = () => {
    return async dispatch => {
        try {
            const response = await axios.post("/", {
                query: GET_USERS_QUERY
            });
            dispatch(fetchUsersSuccess(response.data.data.getAllUsers));
        } catch(error) {
            if (error.response && error.response.data) {
                dispatch(fetchUsersFailure(error.response.data));
            } else {
                dispatch(fetchUsersFailure(error));
            }
        }
    };
};

const fetchUserSuccess = searchedUser => {
    return {type: FETCH_USER_SUCCESS, searchedUser};
};
const fetchUserFailure = error => {
    return {type: FETCH_USER_FAILURE, error};
};

export const fetchUser = (id) => {
    return async dispatch => {
        try {
            const response = await axios.post("/", {
                query: GET_USER(id)
            });
            console.log('user', response.data.data.getUser)
            dispatch(fetchUserSuccess(response.data.data.getUser));
        } catch(error) {
            if (error.response && error.response.data) {
                dispatch(fetchUserFailure(error.response.data));
            } else {
                dispatch(fetchUserFailure(error));
            }
        }
    }
}

const createUserSuccess = user => {
    return {type: CREATE_USER_SUCCESS, user}
}
const createUserFailure = error => {
    return {type: CREATE_USER_FAILURE, error};
}

export const createUser = (userData, navigate) => {
    return async dispatch => {
        try {
            await axios.post("/", {
                query: CREATE_USER(userData)
            })
            dispatch(createUserSuccess())
            navigate('/login')
        } catch(error) {
            if (error.response && error.response.data) {
                dispatch(createUserFailure(error.response.data))
            } else {
                dispatch(createUserFailure(error))
            }
        }
    }
}

const loginUserSuccess = user => {
    return {type: LOGIN_USER_SUCCESS, user};
}
const loginUserFailure = error => {
    return {type: LOGIN_USER_FAILURE, error};
}

export const loginUser = (userData, navigate) => {
    return async dispatch => {
        try {
            const response = await axios.post("/", {
                query: LOGIN_USER(userData)
            })
            dispatch(loginUserSuccess(response.data.data.login))
            navigate('/')
        } catch(error) {
            dispatch(loginUserFailure(error))
        }
    }
}

