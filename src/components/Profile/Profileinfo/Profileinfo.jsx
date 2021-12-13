import Preloader from "../../common/Preloader/Preloader";
import s from "./Profileinfo.module.css";


const Profileinfo = (props) => {
  
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img src="https://www.w3schools.com/css/img_5terre.jpg"></img>
      </div>

      <div className={s.descriptionBlock}> 
      <img src={props.profile.photos.large}/>
      <div> <div className={s.myStatus}>Мой статус: </div><span>{props.profile.aboutMe}</span></div>
      <div>ava + description </div>
      
      
      
      </div>
    </div>
  )

}


export default Profileinfo;