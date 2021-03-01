
import s from "./FriendsBlock.module.css";
import FriendItem from "./FriensItem/FriendItem";

const FriendsBlock = (props) => {
  let friendElements = props.state.friends.map((f) => (
    <FriendItem avatarSrc={f.avatarSrc} name={f.name} id={f.id} />
  ));

  return (
    <div className={s.friendsBlock}>
      <h3>Friends</h3>
      <div className={s.friendsItems}>{friendElements}</div>
    </div>
  );
};

export default FriendsBlock;
