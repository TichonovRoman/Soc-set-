import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return <div class={s.postsBlock}>
    <h3>My posts</h3>
    <div>
      <div>
        <textarea></textarea>
      </div>

      <div>
        <button>Add post</button>
      </div>
    </div>
    <div className={s.posts}>
      <Post message="Hi, how are you?" like="15"/>
      <Post message="Это мой первый пост" like="20"/>
      <Post />
      <Post />
      <Post />
      <Post />

    </div>
  </div>
}


export default MyPosts;