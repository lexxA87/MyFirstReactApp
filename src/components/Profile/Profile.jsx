import MyPosts from './MyPosts/MyPosts'
import p from './Profile.module.css'

const Profile = () =>{
    return <div className={p.content}>
    <div>
      <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
      Image
    </div>
    <div>ava + discription</div>
    <MyPosts />
    </div>
}

export default Profile;