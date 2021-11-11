import s from "./MyPosts.module.css";
import Post from "./Post/Post";


let posts = [
  { id: 1, message: `Hi, how are you?`,  likesCount: "15"},
  { id: 2, message: `Это мой первый пост`, likesCount: "20"},
  { id: 3, message: `Это мой второй пост`, likesCount: "20"},
  { id: 4, message: `Это мой третий пост`, likesCount: "20"},
]

let postsElement = 
   posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)



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
    { postsElement }

    </div>
  </div>
}


export default MyPosts;