import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {loginUser} from "../../store/actions/usersActions";
import FormElement from "../../components/UI/Form/FormElement/FormElement";
import UserForm from "../../components/UserForm/UserForm";
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.users.loginError);
    const navigate = useNavigate();

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const inputChangeHandler = e => {
        const {name, value} = e.target;
        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };

    const submitFormHandler = async e => {
        e.preventDefault();
        await dispatch(loginUser({...state}, navigate));
    };
    return (
        <UserForm
            onSubmit={submitFormHandler}
            title="Sign In"
            error={error}
        >
            <FormElement
                name="email"
                value={state.email}
                onChange={inputChangeHandler}
                label="Email"
                type="email"
            />
            <FormElement
                name="password"
                value={state.password}
                onChange={inputChangeHandler}
                label="Password"
                type="password"
            />
        </UserForm>
    );
}

export default Login;
