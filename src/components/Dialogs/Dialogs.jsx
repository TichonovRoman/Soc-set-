import s from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/Dialogs"
import Message from "./Message/Message"
import React from "react"
import { sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Post from "../Profile/MyPosts/Post/Post";


const Dialogs = (props) => {


    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />);

    let messagesElements = state.messages.map( m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;

  
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body=e.target.value;
        props.updateNewMessageBody(body)
    }




    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>

            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>

                <div>
                    <textarea
                        placeholder="Enter yuor message"
                        value={newMessageBody}
                        onChange={onNewMessageChange}>
                    </textarea>
                </div>

                <div>
                    <button onClick={onSendMessageClick}>Add Message</button>
                </div>

            </div>

        </div>


    )
}

export default Dialogs