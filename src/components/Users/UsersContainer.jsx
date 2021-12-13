import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching
} from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import userPhoto from '../../accets/images/user.png'
import React from 'react';
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

    return
}




export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(UsersContainer);