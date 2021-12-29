import Preloader from "../../common/Preloader/Preloader";
import s from "./Profileinfo.module.css";
import ProfileStatus from './ProfileStatus'

const Profileinfo = (props) => {
  
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      {/*<div>*/}
      {/*  <img src="https://www.w3schools.com/css/img_5terre.jpg"></img>*/}
      {/*</div>*/}





      <div className={s.descriptionBlock}> 
      <img src={props.profile.photos.large}/>
      <ProfileStatus status={"Hello my friends"} />
      
      
      
      </div>
    </div>
  )

}


export default Profileinfo;