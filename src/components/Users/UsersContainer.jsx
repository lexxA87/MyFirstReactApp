import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,
    requestUsers,
    getChangePage,
} from "../../redux/users-reducer";
import Users from "./Users";
import PreLoader from "../Common/PreLoader/PreLoader";
import {compose} from "redux";
import {
    getTotalUsersCount,
    getPageSize,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress,
    getUsers,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getChangePage(pageNumber, pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <PreLoader/>
                ) : (
                    <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        followingInProgress={this.props.followingInProgress}
                    />
                )}
            </>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };
};

export default compose(
    //withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers: requestUsers,
        getChangePage,
    })
)(UsersContainer);
