import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';




const Profile = (props) => {

  return (
    <div>
      <Profileinfo />
      <MyPostsContainer store={props.store} />
    </div>
  )
}


export default Profile;