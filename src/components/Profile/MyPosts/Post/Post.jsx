import s from "./Post.module.css";

const Post = (props) => {
  return <div className={s.item}>
        <img src="https://i.playground.ru/p/b9nKJUCjwE2Kx1T-ygPHSg.jpeg" />
        {props.message}
        <div>
        <span> {props.likesCount} Like</span>  
        </div>
        


      </div>
      
}


export default Post;