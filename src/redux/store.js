import reactDom from "react-dom";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";


let store = {

    _state: {

        profilePage: {
            posts: [
                { id: 1, message: `Hi, how are you?`, likesCount: 15 },
                { id: 2, message: `Это мой первый пост`, likesCount: 20 },
                { id: 3, message: `Это мой второй пост`, likesCount: 20 },
                { id: 4, message: `Это мой третий пост`, likesCount: 20 },
            ],
            newPostText: "it-kamasutra.com"
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: `Dimych`, avatar: `https://vraki.net/sites/default/files/inline/images/30_55.jpg` },
                { id: 2, name: `Andrey`, avatar: `https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg` },
                { id: 3, name: `Sveta`, avatar: `https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg` },
                { id: 4, name: `Sasha`, avatar: `https://yt3.ggpht.com/ytc/AAUvwng015d5KaGgzodaC6HmRLFwTZi8zmwZnt3onn4o=s900-c-k-c0x00ffffff-no-rj` },
                { id: 5, name: `Victor`, avatar: `https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg` },
                { id: 6, name: `Matvey`, avatar: `https://s.starladder.com/uploads/user_logo/5/c/9/d/meta_tag_1039d807e6e9d7e403ecd6510eb61d83.jpg` }
            ],

            messages: [
                { id: 1, message: `Hi` },
                { id: 2, message: `How is yuor it-kamasutra?` },
                { id: 3, message: `Yo` },
                { id: 4, message: `Yo` },
                { id: 5, message: `Yo` }
            ],

            newMessageBody: ""


        },

        friends: [
            { id: 1, name: `Dimych`, avatar: `https://vraki.net/sites/default/files/inline/images/30_55.jpg` },
            { id: 2, name: `Andrey`, avatar: `https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg` },
            { id: 3, name: `Sveta`, avatar: `https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg` },

        ]
    },
    _callSubscriber() {
        console.log(`State changet`)
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;

    },


    dispatch(action) {

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.friends = friendsReducer(this._state.friends, action);

        this._callSubscriber(this._state)
    }
}




export default store;
window.store = store