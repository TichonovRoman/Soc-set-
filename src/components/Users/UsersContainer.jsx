import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingProgress
} from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import userPhoto from '../../accets/images/user.png'
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { usersApi } from '../../api/api';


class UsersContainer extends React.Component {



    componentDidMount() {
        this.props.toggleIsFetching(true); // когда идет запрос, включаем прелоадер
        
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(response => {

            this.props.toggleIsFetching(false); //после запроса прелоадер выключаем
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount)
        })

    }

    onPageChanget = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        
       usersApi.getUsers(pageNumber, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.items);

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
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followingInProgress={this.props.followingInProgress}


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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}

let mapDispatchToProps = (dispatch) => {

    return
}




export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress })(UsersContainer);