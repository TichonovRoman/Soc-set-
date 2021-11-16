import s from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/Dialogs"
import Message from "./Message/Message"





const Dialogs = (props) => {
  

let dialogsElements = props.state.dialogs.map((d) => (<DialogItem name={d.name} id={d.id} avatar={d.avatar}/>))


let messageElements = props.state.messages.map((m) => (<Message message={m.message} />))


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>

            <div className={s.messages}>
                {messageElements}

            </div>
        </div>


    )
}

export default Dialogs