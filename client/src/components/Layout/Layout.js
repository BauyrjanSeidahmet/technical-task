import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import './Layout.css' 

const Layout = props => {
    const user = useSelector(state => state.users.user);
    
    return (
        <div className='wholePage'>
            <div className='header'>
                <NavLink className='logo' to='/'>LOGO</NavLink>
                <div>
                    {
                        user ?
                        <>
                            <span>Hello, {user.email}</span>
                        </>
                        :
                        <div>
                            <NavLink className='menuLink' to='/register'>Register</NavLink>
                            <NavLink className='menuLink' to='/login'>Sign in</NavLink>
                        </div>
                    }
                </div>
            </div>
            <hr/>
            <main className='LayoutContent'>{props.children}</main>
        </div>
    )
}

export default Layout
