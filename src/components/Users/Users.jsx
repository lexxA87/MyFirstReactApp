import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

const Users = ({
                   totalUsersCount,
                   pageSize,
                   currentPage,
                   onPageChanged,
                   followingInProgress,
                   follow,
                   unfollow,
                   users,
                   ...props
               }) => {

    return (
        <div className={s.item}>

            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            <div>
                {users.map((u) => (
                    <User key={u.id} unfollow={unfollow} follow={follow} users={u}
                          followingInProgress={followingInProgress}/>

                ))}
            </div>
        </div>
    );
};

export default Users;
