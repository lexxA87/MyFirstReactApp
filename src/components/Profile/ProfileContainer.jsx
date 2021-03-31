import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import { setUserProfile } from "../../redux/profile-reducer.js";
import { withRouter } from "react-router";
import { profileAPI } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    //debugger;
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    profileAPI.myProfile(userId).then((data) => {
      //debugger;
      this.props.setUserProfile(data);
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
);
