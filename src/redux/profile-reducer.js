import { rerenderEntireTree } from "../index";

const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`;
const ADD_POST = `ADD-POST`;
const SET_USER_PROFILE = `SET_USER_PROFILE`;

let initialState = {
    posts: [
        { id: 1, message: `Hi, how are you?`, likesCount: 15 },
        { id: 2, message: `Это мой первый пост`, likesCount: 20 },
        { id: 3, message: `Это мой второй пост`, likesCount: 20 },
        { id: 4, message: `Это мой третий пост`, likesCount: 20 },
    ],
    newPostText: "it-kamasutra.com",
    profile: null
}

let profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0

            };
            return {
                ...state, //делаем копию
                posts: [...state.posts, newPost], //копируем посты и добавляем newPost вместо push
                newPostText: ``
            };


        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
            };

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }

        };

        default:
            return state

    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export default profileReducer