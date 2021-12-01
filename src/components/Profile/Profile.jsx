import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";




const Profile = (props) => {
  
  
  return (
    <div>
      <Profileinfo />
      <MyPosts 
      posts={props.profilePage.posts} 
      newPostText={props.profilePage.newPostText}
      dispath={props.dispath}
      />
    </div>
  )
}


export default Profile;