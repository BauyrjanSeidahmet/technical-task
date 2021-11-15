import axios from "../../axiosApi";
import {push} from "connected-react-router";
import { CREATE_USER_FAILURE, CREATE_USER_SUCCESS, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER } from "../actionTypes";
import { CREATE_USER } from "../../constants";

const createUserSuccess = user => {
    return {type: CREATE_USER_SUCCESS, user};
};
const createUserFailure = error => {
    return {type: CREATE_USER_FAILURE, error};
};

export const createUser = userData => {
    return async dispatch => {
        try {
            const response = await axios.post("/", {
                query: CREATE_USER(userData)
            });
            dispatch(createUserSuccess(response.data));
            dispatch(push("/"));
        } catch(error) {
            if (error.response && error.response.data) {
                dispatch(createUserFailure(error.response.data));
            } else {
                dispatch(createUserFailure(error));
            }
        }
    };
};

const loginUserSuccess = user => {
    return {type: LOGIN_USER_SUCCESS, user};
};
const loginUserFailure = error => {
    return {type: LOGIN_USER_FAILURE, error};
};

export const loginUser = userData => {
    return async dispatch => {
        try {
            const response = await axios.post("/users/sessions", userData);
            dispatch(loginUserSuccess(response.data))
            dispatch(push("/"));
        } catch(error) {
            dispatch(loginUserFailure(error));
        }
    };
};

// export const logoutUser = () => {
//     return async dispatch => {
//       await axios.delete("/users/sessions");
//       dispatch({type: LOGOUT_USER});
//       dispatch(push("/login"));
//     };
//   };