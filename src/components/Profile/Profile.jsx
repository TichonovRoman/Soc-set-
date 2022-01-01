import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import React from "react";




const Profile = (props) => {

  return (
    <div>
      <Profileinfo profile={props.profile}
                   status={props.status}
                   updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </div>
  )
}


export default Profile;