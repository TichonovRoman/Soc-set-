import {applyMiddleware, combineReducers, createStore} from "redux"
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore (reducers, applyMiddleware(thunkMiddleware));


window.store = store;
export default store;