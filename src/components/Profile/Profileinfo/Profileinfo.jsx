import s from "./Profileinfo.module.css";


const Profileinfo = () => {
  return (
      <div>
          <div>
              <img src="https://www.w3schools.com/css/img_5terre.jpg"></img>
          </div>

          <div className={s.descriptionBlock}> ava + description </div>


    </div>
  )

}


export default Profileinfo;