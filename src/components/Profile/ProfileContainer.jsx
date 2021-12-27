import React from "react";
import Profile from "./Profile";
import {connect} from 'react-redux';
import {getUserProfile, setUserProfile} from '../../redux/profile-reducer';
import * as axios from 'axios';
import {withRouter} from "react-router-dom";
import {usersApi} from "../../api/api";
import Redirect from "react-router-dom/es/Redirect";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile (userId)
    }


    render() {

        return (

            <Profile {...this.props} profile={this.props.profile}/>

        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);




// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
//
//
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)