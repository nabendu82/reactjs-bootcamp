import React, { useEffect } from 'react'
import { fetchUsers } from '../redux'
import { connect } from 'react-redux'

const UserContainer = ({ fetchUsers, user }) => {
    useEffect(() => {
        fetchUsers()
    },[])

    return user.loading ? <h2>Loading...</h2> : user.error ? <h2>{user.error}</h2> : (
        <>
            <h2>Users</h2>
            <div>{user && user.users && user.users.map(item => <p>{item}</p>)}</div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
