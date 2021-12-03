import { rerenderEntireTree } from "../index";

const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`;
const ADD_POST = `ADD-POST`;

let initialState = {
    posts: [
        { id: 1, message: `Hi, how are you?`, likesCount: 15 },
        { id: 2, message: `Это мой первый пост`, likesCount: 20 },
        { id: 3, message: `Это мой второй пост`, likesCount: 20 },
        { id: 4, message: `Это мой третий пост`, likesCount: 20 },
    ],
    newPostText: "it-kamasutra.com"
}

let profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0

            };
            state.posts.push(newPost);
            state.newPostText = ``;
            return state;
            
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state
            
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export default profileReducer