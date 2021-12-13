import s from "./Profileinfo.module.css";


const Profileinfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://www.w3schools.com/css/img_5terre.jpg"></img>
      </div>

      <div className={s.descriptionBlock}> 
      <img src={props.profile.photos.large}/>
      ava + description </div>
    </div>
  )

}


export default Profileinfo;