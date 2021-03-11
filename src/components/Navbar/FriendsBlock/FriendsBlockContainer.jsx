import { connect } from "react-redux";
import FriendsBlock from "./FriendsBlock";

/*const FriendsBlock = (props) => {
  let friendElements = props.state.friends.map((f) => (
    <FriendItem avatarSrc={f.avatarSrc} name={f.name} id={f.id} />
  ));

  return (
    <div className={s.friendsBlock}>
      <h3>Friends</h3>
      <div className={s.friendsItems}>{friendElements}</div>
    </div>
  );
};*/

const mapStateToProps = (state) => {
  return {
    state: state.sidebar.friendsBlock,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const FriendsBlockContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsBlock);

export default FriendsBlockContainer;
