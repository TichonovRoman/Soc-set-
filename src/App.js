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





const App = (props) => {

  

  return (
    
      <div className="app-wrapper">

        <Header />
        <Navbar state={props.state.friends}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>} />  {/* /* этот знак добавляется, если надо убрать exact */}
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} />
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