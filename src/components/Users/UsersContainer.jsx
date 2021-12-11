import react from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setUsersAC, setTotalUsersCountAC } from '../../redux/users-reducer';
import { unfollowAC } from '../../redux/users-reducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
users: state.usersPage.users,
pageSize: state.usersPage.pageSize,
totalUsersCount: state.usersPage.totalUsersCount,
currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    
    return {
        follow: (userId) => {
            dispatch(followAC(userId))

        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))

        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },

        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },

        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }


    }
}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer