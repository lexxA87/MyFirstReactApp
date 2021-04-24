import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";

const User = ({
                  followingInProgress,
                  follow,
                  unfollow,
                  users,
                  ...props
              }) => {

    return (
        <div className={s.item}>
            <div>
          <span>
            <div>
              <NavLink to={"/profile/" + users.id}>
                <img
                    alt={""}
                    src={users.photos.small != null ? users.photos.small : userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {users.followed ? (
                  <button
                      disabled={followingInProgress.some((id) => id === users.id)}
                      onClick={() => {
                          follow(users.id);
                      }}
                  >
                      Unfollow
                  </button>
              ) : (
                  <button
                      disabled={followingInProgress.some((id) => id === users.id)}
                      onClick={() => {
                          unfollow(users.id);
                      }}
                  >
                      Follow
                  </button>
              )}
            </div>
          </span>
                <span>
            <span>
              <div>{users.name}</div>
              <div>{users.status}</div>
            </span>
            <span>
              <div>{"users.location.city"}</div>
              <div>{"users.location.country"}</div>
            </span>
          </span>
            </div>
            ))}
        </div>
    );
};

export default User;
