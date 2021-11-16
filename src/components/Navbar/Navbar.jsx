import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import state from "../../redux/state";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings">Settings</NavLink>
      </div>



      <div className={s.itemFriends}>
        <NavLink to="/friends">Friends</NavLink>
      </div>



      <div className={s.friendsList}>

        <div className={s.friends}>
          <img src={state.friends[0].avatar} />
          {state.friends[0].name}
        </div>

        <div className={s.friends}>
          <img src={state.friends[1].avatar} />
          {state.friends[1].name}
        </div>

        <div className={s.friends}>
          <img src={state.friends[2].avatar} />
          {state.friends[2].name}
        </div>



      </div>


    </nav>
  )
}


export default Navbar;