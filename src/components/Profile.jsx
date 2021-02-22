import p from './Profile.module.css'

const Profile = () =>{
    return <div className={p.content}>
    <div>
      <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
      Image
    </div>
    <div>ava + discription</div>
    <div>
      my posts
      <div>new posts</div>
      <div>post 1</div>
      <div>post 2</div>
    </div>
    </div>
}

export default Profile;