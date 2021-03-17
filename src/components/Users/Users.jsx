import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://funny-photo.s3.amazonaws.com/preview/navi_avatar/smiling-girl-blue-face-effect.jpg",
        followed: true,
        fullName: "Alex",
        status: "I am the best",
        location: { city: "Volgodonsk", country: "Russia" },
      },
      {
        id: 2,
        photoUrl:
          "https://funny-photo.s3.amazonaws.com/preview/navi_avatar/smiling-girl-blue-face-effect.jpg",
        followed: false,
        fullName: "Dmitry",
        status: "I am the best too",
        location: { city: "Volgodonsk", country: "Russia" },
      },
      {
        id: 3,
        photoUrl:
          "https://funny-photo.s3.amazonaws.com/preview/navi_avatar/smiling-girl-blue-face-effect.jpg",
        followed: true,
        fullName: "Ekaterina",
        status: "I am best of the best!",
        location: { city: "Volgodonsk", country: "Russia" },
      },
      {
        id: 4,
        photoUrl:
          "https://funny-photo.s3.amazonaws.com/preview/navi_avatar/smiling-girl-blue-face-effect.jpg",
        followed: false,
        fullName: "Marina",
        status: "I am the best too",
        location: { city: "Volgodonsk", country: "Russia" },
      },
    ]);
  }

  return (
    <div className={s.item}>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
