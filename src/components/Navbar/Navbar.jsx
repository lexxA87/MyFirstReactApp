import { NavLink } from "react-router-dom";
import FriendsBlockContainer from "./FriendsBlock/FriendsBlockContainer";
import s from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={s.nav}>
      <nav>
        <div className={s.item}>
          <NavLink to="/profile" activeClassName={s.activeLink}>
            Profile
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/messages" activeClassName={s.activeLink}>
            Messages
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/users" activeClassName={s.activeLink}>
            Users
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.activeLink}>
            News
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/music" activeClassName={s.activeLink}>
            Music
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/settings" activeClassName={s.activeLink}>
            Settings
          </NavLink>
        </div>
      </nav>

      <FriendsBlockContainer />
    </div>
  );
};

export default Navbar;
