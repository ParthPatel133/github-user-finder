import React from 'react'
import PropTypes from 'prop-types'


const UserItem = ({ user: { login, avtar_url, html_url } }) => {

    return (
        <div className='card text-center'>
            <img
                src={avtar_url}
                alt=''
                className='round-img'
                style={{ width: '60px' }}
            />
            <h3>{login}</h3>
            <div>
                <a href={html_url} target='blank' className='btn btn-dark btn-sm my-1'>More</a>
            </div>
                username
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem;