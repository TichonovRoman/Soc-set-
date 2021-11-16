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



        return ( <BrowserRouter >
                <div className = "app-wrapper" >

                <Header />
                <Navbar />
                <div class = "app-wrapper-content" >
                <Routes >
                <Route path = '/dialogs/*' element = { < Dialogs state = { props.state.dialogsPage }/>} /> { /* /* этот знак добавляется, если надо убрать exact */ }
                <Route path = '/profile' element = { < Profile state = { props.state.profilePage }/>} />
                        <Route path = '/news' element = { < News /> }/>
                        <Route path = '/music' element = { < Music /> }/> 
                        <Route path = '/settings' element = { < Settings /> }/>
                        <Route path = '/friends' element = { < Friends />}/> </Routes>

                        </div> </div>

        </BrowserRouter>
                    );
                }



                export default App;