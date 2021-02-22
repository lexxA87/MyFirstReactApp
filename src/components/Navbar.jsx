import n from './Navbar.module.css';

const Navbar = () =>{
    return <nav className={n.nav}>
    <div>
      <a>Profile</a>
    </div>
    <div>
      <a>Messages</a>
    </div>
    <div>News</div>
    <div>Music</div>
    <div>Settings</div>
  </nav>
}

export default Navbar;