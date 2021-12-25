import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import WithUrlDataContainerComponent from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from "./components/Login/Login";

const App = (props) => {

  return (
    
      <div className="app-wrapper">

        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">
          
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            
            
            <Route path="/profile/:userId?"  render={() => <WithUrlDataContainerComponent />} />
                              
            
            <Route path='/users'  render={() => <UsersContainer />} />



            <Route path='/news'  render={() => <News />} />
            <Route path='/music'  render={() => <Music />} />
            <Route path='/settings'  render={() => <Settings />} />
            <Route path='/friends'  render={() => <Friends />} />
            <Route path='/login'  render={() => <LoginPage />} />
           
        </div>
      </div>
     );
}



export default App;