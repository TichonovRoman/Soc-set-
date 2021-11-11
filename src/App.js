import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';



const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <Header />
        <Navbar />
        <div class="app-wrapper-content">
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs />} />  {/* /* этот знак добавляется, если надо убрать exact */}
            <Route path='/profile' element={<Profile />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;