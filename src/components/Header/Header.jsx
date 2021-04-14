import s from "./Header.module.css";
import logoCoub from "../../assets/images/logo-coub-2.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img alt={""} src={logoCoub} />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log Out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>LOGIN</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
