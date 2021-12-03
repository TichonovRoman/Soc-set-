const UPDATE_NEW_MESSAGE_BODY = `UPDATE-NEW-MESSAGE-BODY`;
const SEND_MESSAGE = `SEND-MESSAGE`;

let initialState = ({
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
}) 

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageBody
            };
            state.messages.push(newMessage);
            state.newMessageBody = ``;
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
            default:
            return state;
    }

}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }

}

export default dialogsReducer;