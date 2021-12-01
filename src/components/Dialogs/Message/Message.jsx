import s from "../Dialogs.module.css"


let Message = (props) => {
    
        return (

            <div className={s.messages}>{props.message}</div>

        )

    }

export default Message