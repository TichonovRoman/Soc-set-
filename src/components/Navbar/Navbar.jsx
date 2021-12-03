import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";


const Navbar = (props) => {
debugger
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
          <img src={props.state.friends[0].avatar} />
          {props.state.friends[0].name}
        </div>

        <div className={s.friends}>
          <img src={props.state.friends[1].avatar} />
          {props.state.friends[1].name}
        </div>

        <div className={s.friends}>
          <img src={props.state.friends[2].avatar} />
          {props.state.friends[2].name}
        </div>



      </div>


    </nav>
  )
}


export default Navbar;