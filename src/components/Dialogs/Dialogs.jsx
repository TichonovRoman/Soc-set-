import s from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/Dialogs"
import Message from "./Message/Message"
import React from "react"
import { rerenderEntireTree } from "../../render"






const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map((d) => (<DialogItem name={d.name} id={d.id} avatar={d.avatar} />))


    let messageElements = props.state.messages.map((m) => (<Message message={m.message} />))

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text)
    
      }




    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>

            <div className={s.messages}>
                {messageElements}

                <div>
                    <textarea 
                    ref={newMessageElement}
                    value = {props.newMessageText}
                    onChange={onMessageChange}> </textarea>
                </div>

                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>

            </div>

        </div>


    )
}

export default Dialogs