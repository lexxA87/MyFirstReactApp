import s from "./../FriendsBlock.module.css";
import { NavLink } from "react-router-dom";

const FriendItem = (props) => {
  let path = "/id_" + props.id;

  return (
    <div className={s.friend}>
      <NavLink to={path}>
        <img alt={""} src={props.avatarSrc} className={s.avatarImage} />
        <div>
          <span>{props.name}</span>
        </div>
      </NavLink>
    </div>
  );
};

export default FriendItem;
