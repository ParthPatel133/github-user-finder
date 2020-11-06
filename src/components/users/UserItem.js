import { getDefaultNormalizer } from '@testing-library/react'
import React, { Component } from 'react'

class UserItem extends Component {
    state = {
        id: 'id',
        login: 'userName',
        avtar_url :  "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
    };

    render() {
        return (
            <div className='card text-center'>
                <img
                    src={this.state.avtar_url}
                    alt=''
                    className='round-img'
                    style={{ width : '60px'}} 
                />
                <h3>{this.state.login}</h3>
                <div>
                    <a href={this.state.html_url} target='blank' className='btn btn-dark btn-sm my-1'>More</a>
                </div>
                username
            </div>
        )
    }
}

export default UserItem;