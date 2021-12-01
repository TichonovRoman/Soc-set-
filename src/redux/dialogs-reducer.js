const UPDATE_NEW_MESSAGE_BODY = `UPDATE-NEW-MESSAGE-BODY`;
const SEND_MESSAGE = `SEND-MESSAGE`;


const dialogsReducer = (state, action) => {
 
   if (action.type===SEND_MESSAGE) {
        let newMessage = {
            id: 6,
            message: state.newMessageBody
        };
        state.messages.push(newMessage);
        state.newMessageBody = ``;
           }
    else if (action.type===UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody=action.body;
        
    
    }
return state
}

export default dialogsReducer;