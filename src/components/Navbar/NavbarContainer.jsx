import { connect } from "react-redux";
import Navbar from './Navbar';



let mapNavbarToProps = (state) => {

  return {
    friends: state.friends
     }
}


const NavbarContainer = connect(mapNavbarToProps)(Navbar);

export default NavbarContainer;