import s from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/Dialogs"
import Message from "./Message/Message"
import React from "react"





const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map((d) => (<DialogItem name={d.name} id={d.id} avatar={d.avatar} />))


    let messageElements = props.state.messages.map((m) => (<Message message={m.message} />))

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }




    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>

            <div className={s.messages}>
                {messageElements}

                <div>
                    <textarea ref={newMessageElement}> </textarea>
                </div>

                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>

            </div>

        </div>


    )
}

export default Dialogs