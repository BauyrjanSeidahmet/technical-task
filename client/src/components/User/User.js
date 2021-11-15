import React from 'react'
import './User.css'

const User = ({email, age}) => {
    return (
        <div className='User'>
            <div className='infoBlock'>
                <span className='infoName'>Email:</span> <span>{email}</span>
            </div>
            <div className='infoBlock'>
                <span className='infoName'>Age:</span> <span>{age}</span>
            </div>
        </div>
    )
}

export default User
