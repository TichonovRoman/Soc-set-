import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Users from "./components/Users/Users"
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    
      <div className="app-wrapper">

        <Header />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer />} />  /* /* этот знак добавляется, если надо убрать exact */
            <Route path='/profile' element={<Profile />} />
            <Route path='/users' element={<UsersContainer />} />



            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/friends' element={<Friends />} />
            </Routes>

        </div>
      </div>
     );
}



export default App;