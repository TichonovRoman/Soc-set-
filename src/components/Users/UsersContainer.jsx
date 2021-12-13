import react from 'react';
import { connect } from 'react-redux';
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setTotalUsersCountAC,
    toggleIsFetchingAC
} from '../../redux/users-reducer';
import { unfollowAC } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import userPhoto from '../../accets/images/user.png'
import React from 'react';
import preloader from '../../accets/images/preloader.svg'
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true); // когда идет запрос, включаем прелоадер
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

            this.props.toggleIsFetching(false); //после запроса прелоадер выключаем
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })

    }

    onPageChanget = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);

        })
    }
    render() {

        return <>
            {this.props.isFetching ? 
            <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanget={this.onPageChanget}
                users={this.props.users}
                userPhoto={userPhoto}
                unfollow={this.props.unfollow}
                follow={this.props.follow}


            />
        </>
    }
}


let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

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
        },


        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },






    }
}




export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);