import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";



   

const MyPosts = (props) => {

  
  let postsElement = 
  props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

 let newPostElement = React.createRef();
 
  let addPost = () => {
  
    props.dispath(addPostActionCreator());
      }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispath(action)

  }

  return <div className={s.postsBlock}>
    <h3>My posts</h3>
    <div>
      <div>
        <textarea 
        onChange={onPostChange} 
        ref={newPostElement} 
        value={props.newPostText}></textarea>

      </div>

      <div>
        <button onClick={ addPost }>Add post</button>
      </div>
    </div>
    <div className={s.posts}>
    { postsElement }

    </div>
  </div>
}


export default MyPosts;