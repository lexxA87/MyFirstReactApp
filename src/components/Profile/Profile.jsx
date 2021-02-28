import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () =>{

    let posts = [
        {message: "Hi! How are you?", likeCount: 15},
        {message: "It's my first React App!", likeCount: 99},
        {message: "It's very good!", likeCount: 1},
        {message: "It's very very good!", likeCount: 3}
      ]

    return <div className={s.content}>
    <ProfileInfo />
    <MyPosts posts={posts}/>
    </div>
}

export default Profile;