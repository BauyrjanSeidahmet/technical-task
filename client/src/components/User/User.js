import React from 'react'

const User = ({email, age}) => {
    return (
        <div>
            <p>{email}</p>
            <span>{age}</span>
        </div>
    )
}

export default User
