import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import FormElement from "../../components/UI/Form/FormElement/FormElement";
import UserForm from "../../components/UserForm/UserForm";
import { createUser } from '../../store/actions/usersActions';
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.users.registerError);
    const navigate = useNavigate();

    const [state, setState] = useState({
        email: "",
        password: "",
        age: ""
    });

    const inputChangeHandler = e => {
        const {name, value} = e.target;
        setState(prevState => {
            return {...prevState, [name]: value};
        });
    };

    const submitFormHandler = async e => {
        e.preventDefault();
        await dispatch(createUser({...state}, navigate));
    };

    return (
        <UserForm
            onSubmit={submitFormHandler}
            title="Sign Up"
            error={error}
        >
            <FormElement
                name="email"
                value={state.email}
                onChange={inputChangeHandler}
                label="Email"
                type="email"
                required
            />
            <FormElement
                name="password"
                value={state.password}
                onChange={inputChangeHandler}
                label="Password"
                type="password"
                required
            />
               <FormElement
                name="age"
                value={state.age}
                onChange={inputChangeHandler}
                label="Your Age"
                type="text"
                required
            />
        </UserForm>
    );
}

export default Register;