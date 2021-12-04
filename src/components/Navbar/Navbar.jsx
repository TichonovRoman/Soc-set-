import { NavLink } from "react-router-dom";
import StoreContext from "../../StoreContext";
import s from "./Navbar.module.css";

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


<StoreContext.Consumer>
{ store => {
  return (
      <div className={s.friendsList}>

        <div className={s.friends}>
          <img src={store.getState().friends.friends[0].avatar} />
          {store.getState().friends.friends[0].name}
        </div>

        <div className={s.friends}>
          <img src={store.getState().friends.friends[1].avatar} />
          {store.getState().friends.friends[1].name}
        </div>

        <div className={s.friends}>
          <img src={store.getState().friends.friends[2].avatar} />
          {store.getState().friends.friends[2].name}
        </div>

      </div>
  )
}
}
</StoreContext.Consumer>

    </nav>
  )
}


export default Navbar;