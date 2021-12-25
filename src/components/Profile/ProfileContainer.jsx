import React from "react";
import Profile from "./Profile";
import {connect} from 'react-redux';
import {getUserProfile, setUserProfile} from '../../redux/profile-reducer';
import * as axios from 'axios';
import {withRouter} from "react-router-dom";
import {usersApi} from "../../api/api";
import Redirect from "react-router-dom/es/Redirect";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile (userId)
    }


    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>;
        return (

            <Profile {...this.props} profile={this.props.profile}/>

        )
    }

}


let mapStateToProps = (state) => ({

    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)